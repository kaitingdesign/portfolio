param(
  [string]$InPath,
  [string]$OutPath,
  [double]$Scale = 0.5,
  [int]$FrameStep = 2
)

Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase

$inStream = [System.IO.File]::OpenRead($InPath)
$decoder = New-Object System.Windows.Media.Imaging.GifBitmapDecoder($inStream, [System.Windows.Media.Imaging.BitmapCreateOptions]::PreservePixelFormat, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)

$encoder = New-Object System.Windows.Media.Imaging.GifBitmapEncoder

$count = $decoder.Frames.Count
$kept = 0
for ($i = 0; $i -lt $count; $i += $FrameStep) {
  $frame = $decoder.Frames[$i]

  $transform = New-Object System.Windows.Media.ScaleTransform($Scale, $Scale)
  $resized = New-Object System.Windows.Media.Imaging.TransformedBitmap($frame, $transform)

  # keep original frame delay/disposal metadata, adjust delay to compensate skipped frames
  $meta = $null
  try { $meta = $frame.Metadata.Clone() } catch {}

  if ($meta -ne $null -and $FrameStep -gt 1) {
    try {
      $curDelay = $frame.Metadata.GetQuery("/grctlext/Delay")
      if ($curDelay -ne $null) {
        $meta.SetQuery("/grctlext/Delay", [UInt16]($curDelay * $FrameStep))
      }
    } catch {}
  }

  $newFrame = [System.Windows.Media.Imaging.BitmapFrame]::Create($resized, $null, $meta, $null)
  $encoder.Frames.Add($newFrame)
  $kept++
}

$inStream.Close()

$outStream = [System.IO.File]::Create($OutPath)
$encoder.Save($outStream)
$outStream.Close()

$beforeSize = (Get-Item $InPath).Length
$afterSize = (Get-Item $OutPath).Length
"Frames kept: $kept / $count"
"{0:N0}KB -> {1:N0}KB" -f ($beforeSize/1KB), ($afterSize/1KB)
