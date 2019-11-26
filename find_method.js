//The array.find() is an inbuilt function in JavaScript which is used to get the value of the first element in the array that satisfies the provided condition

//array.find(function(element))
//the parameter "element" is the element of the array on which .find() function works

var array = [90, 80, 77, 1999, 2, 30];

var findNumber = array.find(function(element) {
    return element > 30; 
}); 

console.log(findNumber); 


const groceryList = [
    {name: "bananas", quantity: 5}, 
    {name: "milk", quantity: 1}, 
    {name: "eggs", quantity: 12}
]

function howManyEgg(item) {
    return item.name === 'eggs'; 
}


const odyArray = ["Ody", "Jody", "Tody", "Grody"]; 
const findElement = odyArray.find(element => element.startsWith("J")); 

console.log(groceryList.find(howManyEgg)); 
console.log(findElement); 