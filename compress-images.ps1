param(
  [string]$Folder = "$PSScriptRoot\images\haozhai",
  [int]$MaxDim = 1920,
  [int64]$JpegQuality = 82
)

Add-Type -AssemblyName System.Drawing

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $JpegQuality)

$files = Get-ChildItem $Folder -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' }

$results = @()
foreach ($f in $files) {
  $origSize = $f.Length
  $img = [System.Drawing.Image]::FromFile($f.FullName)
  $w = $img.Width
  $h = $img.Height
  $scale = 1.0
  if ($w -gt $MaxDim -or $h -gt $MaxDim) {
    $scale = [Math]::Min($MaxDim / $w, $MaxDim / $h)
  }
  $newW = [Math]::Max(1, [int]($w * $scale))
  $newH = [Math]::Max(1, [int]($h * $scale))

  $bmp = New-Object System.Drawing.Bitmap($newW, $newH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $newW, $newH)
  $g.Dispose()
  $img.Dispose()

  $tempPath = $f.FullName + ".tmp"
  if ($f.Extension -match '\.png$') {
    $bmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
  } else {
    $bmp.Save($tempPath, $jpegCodec, $encoderParams)
  }
  $bmp.Dispose()

  Move-Item -Force $tempPath $f.FullName
  $newSize = (Get-Item $f.FullName).Length
  $results += [PSCustomObject]@{ Name = $f.Name; Before = $origSize; After = $newSize }
}

$results | ForEach-Object {
  "{0}: {1:N0}KB -> {2:N0}KB" -f $_.Name, ($_.Before/1KB), ($_.After/1KB)
}
$totalBefore = ($results | Measure-Object Before -Sum).Sum
$totalAfter = ($results | Measure-Object After -Sum).Sum
"---"
"TOTAL: {0:N1}MB -> {1:N1}MB" -f ($totalBefore/1MB), ($totalAfter/1MB)
