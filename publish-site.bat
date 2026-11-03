@echo off
title Publish website to GitHub
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed. Install it from https://git-scm.com/download/win, then run this file again.
  pause
  exit /b 1
)

if not exist .git (
  git init -q -b main
  git remote add origin https://github.com/kaka998-u/kaka998-u.github.io.git
  rem keep the git history out of Dropbox sync
  powershell -NoProfile -Command "Set-Content -Path .git -Stream com.dropbox.ignored -Value 1"
)

git config user.name >nul 2>nul || git config user.name "Zhihang Zhang"
git config user.email >nul 2>nul || git config user.email "kaka998-u@users.noreply.github.com"

rem The files in this folder (synced by Dropbox) are the source of truth.
rem Start from the latest history on GitHub, so any computer can publish.
echo Checking the latest version on GitHub...
git fetch origin main && git reset -q --soft origin/main

git add -A
echo.
echo Files changed since the last upload:
git status --short
echo.
git commit -q -m "Update site" >nul 2>nul || echo No changes since the last upload.

echo Uploading...
git push -u origin main
if errorlevel 1 (
  echo.
  echo UPLOAD FAILED. Take a screenshot of this window and send it to Claude.
) else (
  echo.
  echo Done. The site rebuilds on GitHub in about two minutes: https://kaka998-u.github.io
)
pause
