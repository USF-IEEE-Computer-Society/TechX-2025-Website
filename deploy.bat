@echo off
REM TechX Florida 2025 - GitHub Pages Deployment Script (Windows)
REM This script builds and deploys the website to GitHub Pages

echo.
echo Starting TechX Florida deployment...
echo.

REM Step 1: Remove old docs folder if it exists
echo Cleaning up old docs folder...
if exist "docs" (
    rmdir /s /q docs
    echo Removed old docs folder
) else (
    echo No existing docs folder found
)
echo.

REM Step 2: Navigate to TechX_Website directory
echo Navigating to TechX_Website...
cd TechX_Website
if errorlevel 1 (
    echo Error: TechX_Website folder not found
    pause
    exit /b 1
)
echo.

REM Step 3: Run the build
echo Building the website...
call npm run build
if errorlevel 1 (
    echo Error: Build failed
    pause
    exit /b 1
)
echo.

REM Step 4: Check what was created and move it
echo Checking build output...
if exist ".docs" (
    echo Found .docs folder
    move .docs ..\docs
    if errorlevel 1 (
        echo Error: Failed to move .docs folder
        pause
        exit /b 1
    )
    echo Moved .docs to ..\docs
) else if exist "docs" (
    echo Found docs folder
    move docs ..\docs
    if errorlevel 1 (
        echo Error: Failed to move docs folder
        pause
        exit /b 1
    )
    echo Moved docs to ..\docs
)

echo.

REM Step 5: Return to root directory
cd ..

REM Step 6: Verify docs folder exists
if not exist "docs" (
    echo Error: docs folder was not created successfully
    pause
    exit /b 1
)

REM Step 7: Create CNAME file
echo Creating CNAME file...
echo|set /p="techxflorida.com"> docs\CNAME
echo Created CNAME with techxflorida.com
echo.
echo Successfully deployed, please proceed to making commit and pushing to GitHub.
echo.

pause > nul