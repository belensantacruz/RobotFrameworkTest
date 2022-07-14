*** Settings ***
Library  SeleniumLibrary

*** Test Cases ***
Check successfull login by clicking button
    Open browser    http://www.saucedemo.com   Chrome
    Sleep   2s
    Input Text    id:user-name   standard_user
    Sleep   2s
    Input Password    id:password   secret_sauce
    Sleep   2s
    Click Button    id:login-button
    Sleep   2s
    Close Browser

Check successfull login by pressing enter
    Open browser    http://www.saucedemo.com   Chrome
    Sleep   2s
    Input Text    id:user-name   standard_user
    Sleep   2s
    Input Password    id:password   secret_sauce
    Sleep   2s
    Press Keys    id:password   RETURN
    Sleep   2s
    Close Browser