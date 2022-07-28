*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${browser}  Chrome
${url}  http://www.saucedemo.com
${user}  standard_user
${password}  secret_sauce

| *** Test Cases ***
Check successfull login by clicking button
    Open browser    ${url}   ${browser}
    Maximize Browser Window
    Fill_login_info
    Click Button    id:login-button
    Sleep   2s
    Close Browser

Check successfull login by pressing enter
    Open browser    http://www.saucedemo.com   Chrome
    Maximize Browser Window
    Fill_login_info
    Press Keys    id:password   RETURN
    Sleep   2s
    Close Browser



*** Keywords ***
Fill_login_info
    Sleep   2s
    Input Text    id:user-name   standard_user
    Sleep   2s
    Input Password    id:password   secret_sauce
    Sleep   2s
