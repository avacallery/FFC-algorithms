function findIndex(arr, num) {
    return arr.concat(num).sort().indexOf(num);
}
console.log(findIndex([40, 60], 50));


//Our goal is to return the index of our input number after it is sorted into the input array
//Two parameters - the input array, and input number

//Difference between push and concat
//push will return 6 (length of array) and concat will return array
let array = [4, 10, 20, 56, 28];
// console.log(array.push(8));
// console.log(array.concat(98));
