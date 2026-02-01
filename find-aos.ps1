# Find AOS Usage Script
# Save as: find-aos.ps1
# Run: .\find-aos.ps1

Write-Host "Finding all AOS usage in your project..." -ForegroundColor Yellow
Write-Host ""

$projectPath = "C:\Users\janab\Desktop\Sites\dogphysio\src"

# Find all files with data-aos
$files = Get-ChildItem -Path $projectPath -Recurse -Include *.jsx,*.js | 
    Select-String -Pattern "data-aos" | 
    Select-Object -ExpandProperty Path -Unique

Write-Host "Files with AOS animations:" -ForegroundColor Green
Write-Host ""

$totalCount = 0

foreach ($file in $files) {
    $relativePath = $file.Replace($projectPath + "\", "")
    $count = (Get-Content $file | Select-String -Pattern "data-aos" -AllMatches).Matches.Count
    $totalCount += $count
    
    Write-Host "$relativePath" -ForegroundColor Cyan
    Write-Host "  → $count animations" -ForegroundColor White
    Write-Host ""
}

Write-Host "===========================================" -ForegroundColor Yellow
Write-Host "Total files with AOS: $($files.Count)" -ForegroundColor Green
Write-Host "Total animations: $totalCount" -ForegroundColor Green
Write-Host "===========================================" -ForegroundColor Yellow
Write-Host ""
Write-Host "Recommendation:" -ForegroundColor Yellow
Write-Host "  Keep only 15-30 strategic animations" -ForegroundColor White
Write-Host "  Remove the rest for better performance" -ForegroundColor White
Write-Host ""

# Show top 5 most animated files
Write-Host "Top 5 most animated files:" -ForegroundColor Yellow
Write-Host ""

$fileStats = @()
foreach ($file in $files) {
    $count = (Get-Content $file | Select-String -Pattern "data-aos" -AllMatches).Matches.Count
    $fileStats += [PSCustomObject]@{
        File = $file.Replace($projectPath + "\", "")
        Count = $count
    }
}

$fileStats | Sort-Object -Property Count -Descending | Select-Object -First 5 | ForEach-Object {
    Write-Host "$($_.File): $($_.Count) animations" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Focus on these files first!" -ForegroundColor Green