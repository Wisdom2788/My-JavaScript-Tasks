const {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels} = require ("./FunctionTask.js");

test("calculate area of a triangle", ()=>{
let width = 10;
let height = 40;
let answer = 400;
let result = calculateArea(width, height)
expect(result).toBe(answer)
})

test("convert to fahrenheit", ()=>{
let celsius = 45;
let answer = 113;
let fahrenheit = convertToFahrenheit(celsius)
expect(fahrenheit).toBe(answer)
})

test("return true or false", ()=>{
let number = 12;
let answer = true;
let result = isEven(number)
expect(result).toBe(answer)
})

test("return true or false", ()=>{
let number = 9;
let answer = false;
let result = isEven(number)
expect(result).toBe(answer)
})


test("its a leap year", ()=>{
let year = 2005;
let answer = false;
let result = isLeapYear(year)
expect(result).toBe(answer)
})

test("its a leap year", ()=>{
let year = 2000;
let answer = true;
let result = isLeapYear(year)
expect(result).toBe(answer)
})


test("count the vowels", ()=>{
let vowel = "international";
let answer = 6;
let result = countVowels(vowel)
expect(result).toBe(answer)
})