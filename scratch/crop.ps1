Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $destPath, $cropX, $cropY, $cropWidth, $cropHeight) {
    $src = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropWidth, $cropHeight)
    $cropped = $src.Clone($rect, $src.PixelFormat)
    $cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $cropped.Dispose()
    $src.Dispose()
    Write-Host "Saved $destPath ($cropWidth x $cropHeight)"
}

$hotSrc = "C:\Users\hp\.gemini\antigravity\brain\bddfbe5d-7932-4107-bc2d-fca2ebead56e\.user_uploaded\media_1789473190879.png"
$hotBmp = [System.Drawing.Bitmap]::FromFile($hotSrc)
$hotW = $hotBmp.Width
$hotH = $hotBmp.Height
$hotBmp.Dispose()
# In hotSrc, let's crop tight around the packet
Crop-Image $hotSrc "d:\ITPL\Navavi Chai\src\assets\New Products\hot-coffee.jpg" ([int]($hotW * 0.05)) 0 ([int]($hotW * 0.90)) ([int]($hotH * 0.73))

$coldSrc = "C:\Users\hp\.gemini\antigravity\brain\bddfbe5d-7932-4107-bc2d-fca2ebead56e\.user_uploaded\media_1789471162004.png"
$coldBmp = [System.Drawing.Bitmap]::FromFile($coldSrc)
$coldW = $coldBmp.Width
$coldH = $coldBmp.Height
$coldBmp.Dispose()
# In coldSrc, packet starts at X = 13% to avoid the "Tea" badge on top left
Crop-Image $coldSrc "d:\ITPL\Navavi Chai\src\assets\New Products\cold-coffee.jpg" ([int]($coldW * 0.12)) ([int]($coldH * 0.065)) ([int]($coldW * 0.77)) ([int]($coldH * 0.585))
