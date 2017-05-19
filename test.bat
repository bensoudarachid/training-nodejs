rem TITLE bla test
rem ping 127.0.0.1 -n 10 -w 1000 > nul

SET activeworker=2
SET deployto=1
for /F "tokens=3 delims=: " %%H in ('sc queryex "tomcat8clusterworker2" ^| findstr "        STATE"') do (
  if /I "%%H" NEQ "RUNNING" (
   REM Put your code you want to execute here
   REM For example, the following line
   SET activeworker=1
   SET deployto=2
  )
)
ECHO activeworker = %activeworker%
ECHO deployto = %deployto%

