param([string]$path)

Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName WindowsBase

$stream = [System.IO.File]::OpenRead($path)
$decoder = New-Object System.Windows.Media.Imaging.GifBitmapDecoder($stream, [System.Windows.Media.Imaging.BitmapCreateOptions]::PreservePixelFormat, [System.Windows.Media.Imaging.BitmapCacheOption]::OnLoad)

"FrameCount: $($decoder.Frames.Count)"
"Width x Height: $($decoder.Frames[0].PixelWidth) x $($decoder.Frames[0].PixelHeight)"

for ($i = 0; $i -lt [Math]::Min(5, $decoder.Frames.Count); $i++) {
  $f = $decoder.Frames[$i]
  $delayQuery = $null
  try { $delayQuery = $f.Metadata.GetQuery("/grctlext/Delay") } catch {}
  "Frame $i delay(1/100s): $delayQuery"
}

$stream.Close()
