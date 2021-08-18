# Palindrome Birthday
This is a web app created on CodeSandBox and is based on ReactJS. It takes the birthday as input from user and checks if the date is palindrome in various formats.
## Working
1. The user has to input a their birthday to the app which will call the userInputHandler function.
2. The userInputHandler function stores the input in date variable and and then displays a loading image in the output section.
3. After that findResult function is called by passing the value date after a delay using setTimeout.
4. The findResult function first stores the date, month and year in an array and then these values are assigned to individual variables.
5. The checkCombi function is called by passing the date, month and year and the result is stored in a variable known as correctCombi.
6. The checkCombi function makes different combination string(MM/DD/YYY, DD/MM/YYY, MM/DD/YY) of the birthday and checks if the string is palindrome or not. If the string is found palindrome it will return the date in that particular format else it will return null.
7. The returned value will be stored in correctCombi variable. If the value is not null the result will be displayed to the user.
8. If the value of correctCombi is null, getNearestDate function is called by passing the value of input date, month and year. 
9. The getNearestDate function finds the nearest palindromic date to the users birthday using the checkCombi function. It searches for the next date by incrementing the date and performing a forward search as well as searches for the previous date by decrementing the date and performing a backward search. When the date is found it returns the date in that particular format and the difference in days. The output is then shown to the user.
