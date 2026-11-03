@echo off
title Zhihang website (close this window to stop)
cd /d "%~dp0"
if not exist node_modules (
  echo Installing packages, first run only...
  call npm install
)
call npx astro dev --open --force
pause
