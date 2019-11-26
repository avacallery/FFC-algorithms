// Method 1: Using sort
// The sort method for arrays sorts an array using the result of a compare function supplied to it.

function findLongestWordLength(str) {
    const stringArray = str.split(" "); 
    const orderedArray = stringArray.sort((a,b) => {
     return b.length - a.length
    });
    console.log(orderedArray[0].length); 
    return orderedArray[0].length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog"); 
  

  //1.) We have a string that must be converted to an array using split(); 
        //a.) split() takes a separator as an argument (where the string will be split) in this case it will be a space
  //2.) Now we SORT our array of words by the length of each word
        //a.) sort() uses a compare function to sort the array's contents. So, we will want to compare the length of two words and then move on to the next
        //b.) our compare function then would simply return the words in order of length