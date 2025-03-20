function calculateArea (width, height) {
	let result = width * height;
	return result;
}


function convertToFahrenheit (celsius) {
	let fahrenheit = celsius * 9/5 + 32;
	return fahrenheit;
}


function isEven (number) {
	if (number % 2 === 0) {
		return true;
	} else {
	  return false;
	}
}


function isLeapYear(year) {
	if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
		return true;
	} else {
	   return false;
	}
}

function countVowels(vowel) {
    let count = 0;
    let word = "aeiouAEIOU";  
    for (let checker = 0; checker < vowel.length; checker++) {
        if (word.includes(vowel[checker])) { 
            count++;
        }
    }  
    return count;
}


module.exports = {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels};