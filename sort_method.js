//Selection sort

var array = [2,7,4,1,5,3];

    array.sort(function(a,b) {
        return a-b});
 
console.log(array); 

// Introduction to Sorting Algorithms 

//Arrange data in a certain order
//For example, on a hotel booking website, you can arrange the hotel options by rating/price/location etc. 

//Sorting is arranging the elements in a list or collection in increasing or decreasing order of some property 
//Example: integers 2,5,6,7,8 

//In an unsorted list: Linear search (scan the whole list from the start) 
//In a sorted list: Binary search 

//Sorting Algorithms: 
//Bubble sort
//Selection sort
//Insertion sort
//Merge sort
//Quick sort
//Heap sort
//Counting sort
//Radix sort

//Classifictions: 
//1.) Time complexity - how much time the algorithm takes to sort
//2.) Space complexity - memory usage, how the memory grows with input 
//3.) Stability - equality of key, propery of which we're sorting (like sorting a series of cards and there are two cards that are the same. Which one comes first?)
//4.) Internal sort vs. External sort
//5.) Recursive or non-recursive: quick/merge sort vs. insertion/selection sort