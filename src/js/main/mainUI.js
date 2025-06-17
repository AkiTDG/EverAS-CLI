/*
 OS' main U.I. it includes date and time viewer/checker function 
 */
export function homeMenu(){
   const date = new Date().toLocaleDateString()
   return ` /$$$$$$$$                             /$$$$$$   /$$$$$$ 
| $$_____/                            /$$__  $$ /$$__  $$
| $$    /$$    /$$ /$$$$$$   /$$$$$$ | $$  \\ $$| $$  \\__/
| $$$$$|  $$  /$$//$$__  $$ /$$__  $$| $$$$$$$$|  $$$$$$ 
| $$__/ \\  $$/$$/| $$$$$$$$| $$  \\__/| $$__  $$ \\____  $$
| $$     \\  $$$/ | $$_____/| $$      | $$  | $$ /$$  \\ $$
| $$$$$$$$\\  $/  |  $$$$$$$| $$      | $$  | $$|  $$$$$$/
|________/ \\_/    \\_______/|__/      |__/  |__/ \\______/
 _  _  _                             __            
|_||_)|_) |  o  _  _ _|_ o  _ __    (_     o _|_ _ 
| ||  |   |  | (_ (_| |_ | (_)| |   __)|_| |  |_(/_

+----------------------------------------------+
|==============[Welcome to EverAS!]============|
|                                              |
| Today is:   ${date.padEnd(33)}|
| Time check: <span id="display-time">--:--</span>                      |
|                                              |
| Type "nav menu" to open main menu            |
| Type "help" for important commands           |
| Press F5 (Or refresh icon) to restart System |
|==============================================|
+----------------------------------------------+
`//<--NEVER REMOVE THIS LINE   
}
//main menu
export const mainMenu = 
` /$$$$$$$$                             /$$$$$$   /$$$$$$ 
| $$_____/                            /$$__  $$ /$$__  $$
| $$    /$$    /$$ /$$$$$$   /$$$$$$ | $$  \\ $$| $$  \\__/
| $$$$$|  $$  /$$//$$__  $$ /$$__  $$| $$$$$$$$|  $$$$$$ 
| $$__/ \\  $$/$$/| $$$$$$$$| $$  \\__/| $$__  $$ \\____  $$
| $$     \\  $$$/ | $$_____/| $$      | $$  | $$ /$$  \\ $$
| $$$$$$$$\\  $/  |  $$$$$$$| $$      | $$  | $$|  $$$$$$/
|________/ \\_/    \\_______/|__/      |__/  |__/ \\______/ 
 _  _  _                             __            
|_||_)|_) |  o  _  _ _|_ o  _ __    (_     o _|_ _ 
| ||  |   |  | (_ (_| |_ | (_)| |   __)|_| |  |_(/_

+----------------------------------------------+
|==================[Main Menu]=================|
| Features & (command name)                    |
| +------------------------------------------+ |
| | A. Calculators                           | |
| |    BMI calculator................(bmi)   | |
| |    Simple calculator............(calc)   | |
| | B. Converters                            | |
| |    Day/Time converter............(dtc)   | |
| |    Temperature converter..........(tc)   | |
| | C. Games                                 | |
| |    Ping pong....................(pong)   | |
| | D. Miscellaneous                         | |
| |    Animation test..............(+-*/%)   | |
| |    Dictionary....................(eng)   | |
| +------------------------------------------+ |
|==============================================|
+----------------------------------------------+`
//help menu
export const helpMenu = 
`+----------------------------------------------------------+
|=======================[Help Menu]========================|
| Commands:                                                |
| nav [feature] - Go to feature (e.g. nav calc)            |
| nav home      - Go to home menu                          |
| exit          - Exit current feature                     |
| clear         - Clear the console screen                 |
|                                                          |
| Features (Note: * = Under impelementation, ^ = Beta):    |
|                                                          |
| A. Calculators:                                          |
|  1. calc - Simple Calculator                             |
|  2. bmi  - Body Mass Index Calculator                    |
| B. Converters:                                           |
|  1. dtc  - Day/Time Converter (days, hrs, min, sec)      |
|  2. tc   - Temp Converter (C ↔ F)                        |
| C. Games:                                                |
|  ^1. pong - Ping Pong game vs AI (First to score 20 wins)|
|             Controls: ↑ ↓ (PC), hover (Mobile)           |
| D. Miscellaneous                                         |
|   1. +-*/% (animation test) - render ASCII animation     |
|   2. eng - English Dictionary (OPTED 1913 Webster)       |
|     • Type a word to get its definition.                 |
|     • Use (suffix) to search suffixes, e.g. "(ness)"     |
|     • Based on public domain 1913 Webster’s Dictionary   |
|==========================================================|
+----------------------------------------------------------+`
