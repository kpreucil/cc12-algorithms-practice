/*
Problem 1

Write a function which takes an array of numbers and returns the minimum of that array.
   [3,4,5] -> 3
   [2, -30] -> -30
*/

//need to keep track of the lowest # we have seen. variables are used to track so we need a variable

function minimum(arr) {
    "use strict"
    var minSoFar = arr[0];
    for (var i = 0; i < arr.length; i++) { //need to memorize this because it will look at each element of an array.
//        console.log(minSoFar, arr[i], arr[i+1]) //checking the process to debug
        if  (arr[i] < minSoFar) {
            minSoFar = arr[i];
        }
    }
    return minSoFar;
}

//need to make sure that these are returned true. They are the tests.
console.log(minimum([3,4,5]) == 3);
console.log(minimum([2, -30]) == -30);
console.log(minimum([0,1,2,-3]) == -3);
console.log(minimum([0]) == 0);

/*
Problem 2

Write a function which takes an array of numbers and returns the maximum of that array.
[3,4,5] -> 5
[-10, 2] -> 2
*/

function maximum(arr) {
    "use strict"
    var maxSoFar = arr[0];
    for (var i = 0; i < arr.length; i++) { //need to memorize this because it will look at each element of an array.
//        console.log(maxSoFar, arr[i], arr[i+1]); //checking the process to debug
        if  (arr[i] > maxSoFar) {
            maxSoFar = arr[i];
        }
    }
    return maxSoFar;
}

//need to make sure that these are returned true. They are the tests.
console.log(maximum([3,4,5]) == 5);
console.log(maximum([2, -30]) == 2);
console.log(maximum([0,1,2,-3]) == 2);
console.log(maximum([0]) == 0);


/*
Problem 3
Write a function which takes an array of numbers and returns the average of that array.
[2, 4, 6] - > 4
[0, 0, 0, 10] -> 2.5
*/

//need to add all the elements together and then divide by the amount of elements there are.

function avg(arr) {
    "use strict"
    var average = arr[0];
    for (var i = 1; i < arr.length; i++) {
        average = average + arr[i];
         }
    return average/arr.length;
}
console.log(avg([2,4,6]) == 4);
console.log(avg([0,0,0,10]) == 2.5);

/*
Problem 4
Write a function which takes an array of integers > 0 and returns  the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
*/

//need to recognize what number is missing from the sequence.

function integer(arr) {
    "use sctrict"
    var missInt;
    for (var i = 0; i < arr.length; i++) {
        missInt = arr[i];
        if (missInt != i + 1) {
            return i+1;
        } 
    } 
    return arr[arr.length -1] +1; 
}

//else if (missInt == i + 1) {
//        arr.length + 1 = misInt;
//    }
//    return misInt;

//      else if (missInt <= arr.length) {
//        return i + 1;
//    }

console.log(integer([1,2,5]) == 3);
console.log(integer([1,2,3,4,5]) == 6);