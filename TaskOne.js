// 	(Task One) <<< Destructuring My Objects >>>

const book = {
title: "The Great Gatsby",
author: "F. Scott Fitzgerald",
yearPublished: 1925
};

const {title, by, author} = book
console.log(`${title} by ${author}`)



// 	<<< (Task Two) Looping Through The Properties of My Car >>>

const car = {
make: "Toyota",
model: "Camry",
year: 2021
};

const getPropertiesOfACar = function (car) {
	for (const key in car) {
	   	console.log(car[key])
	}

}
getPropertiesOfACar(car)



// 	<<< (Task Four) GettingFullnameOfAPerson >>>

const person = {
firstname: "Wisdom",
lastname: "Uzoma"
};

const getFullName = function (person) {
	const {firstname, by, lastname} = person
		console.log(firstname, lastname)
}
getFullName(person)




// 	(Task Five) <<< Returning Person Information As A String (Using Destructuring) >>> 


const person2 = {
name1: "John",
name2: "Doe",
age: 25
};

const returnDetailsOfPersonAsAString = function (person2) {
	const {name1, by, name2, age} = person2
		console.log(name1, name2, age)
}
returnDetailsOfPersonAsAString(person2)