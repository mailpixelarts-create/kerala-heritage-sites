@echo off
echo ============================================
echo   Kerala Heritage Site 1 - Starting Server
echo ============================================
echo.
echo Building for production...
call npx vite build
if %errorlevel% neq 0 (
  echo.
  echo BUILD FAILED! Check errors above.
  pause
  exit /b %errorlevel%
)
echo.
echo Starting server on http://localhost:3000...
echo.

REM Start server in a new minimized window
start "Site 1 Server" /min cmd /c "npx serve dist -l 3000"

REM Wait for server to be ready
echo Waiting for server to start...
timeout /t 5 /nobreak >nul

REM Open browser
echo Opening browser...
start http://localhost:3000

echo.
echo Server is running at http://localhost:3000
echo Close this window or press Ctrl+C to stop.
echo.
pause
