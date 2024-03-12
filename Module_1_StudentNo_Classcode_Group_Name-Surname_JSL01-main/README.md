The project aims to validate an input from a user in the client-side.
Javascript was used to listen for an event by the user as they press the validate button.
The input must start with "pet_" ,followed by a number describing a year and a string describing a geographical place.

My javascript separates the input using the substring method to get the first 4 characters,those 4 characters are compared to the string "pet_".

The middle set of characters in  the input should be 4 digit number.The substring method is used to grab those 4 characters from the input string.
Those characters are converted to the 'number' data type and eveluated if they truly are numbers and only numbers.

The last set of characters in the input are converted to a number data type to check if not all characters are numbers,if they all are numbers, the code will ouptput 
'invalid input', since the name of a geographical place cant be a number, but can include numbers.
