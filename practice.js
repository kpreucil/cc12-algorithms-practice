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

/*
Problem 5 - with class
Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/

//need to look through the array and remember which numbers we have seen before to recognize which are repeated

////ORIGINAL first part of 5
//function removeDupes(arr) {
//    "use strict"
//    var newArr = [];
//    for (var i =0; i < arr.length; i++) {
//        var lookingFor = arr[i];
//        var foundIt = false;
//        for (var j = 0; j < newArr.length; j++) { //every time we do an i loop we run a j loop
//            if (newArr[j] == lookingFor) {
//                foundIt = true;
//            }
//        } if (!foundIt) {
//            newArr[newArr.length] = lookingFor;
//        }
//    }
//    return newArr;
//}

//#5 simplified with new knowledge of metho

function removeDupes(arr) {
    "use strict"
    var newArr = [];
    for (var i =0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//this doesn't actually work yet. We need to compare the arrays

function cmpArr(arrA, arrB){
    "use strict"
    if (arrA.length != arrB.length) { //this guards against unequal array lengths = guard array
        return false;
    }
    for (var i=0; i < arrA.length; i++) { 
        //Determine if arrA[0] == arrB[0]. If we were looking for any element in arrA to be present somewhere in arrB requires a much more complicated array
        if (arrA[i] != arrB[i]) {
            return false;
        }
    }
    return true;
}

//test cmpArr before testing removeDupes
console.log(cmpArr([0],[0]) == true);
console.log(cmpArr([1,2,3],[1,3,2]) == false);
console.log(cmpArr([],[1]) == false);
console.log(cmpArr([],[]) == true);
console.log(cmpArr([0,1,2],[0,1,2]) == true);

console.log(cmpArr(removeDupes([1,1,2,3,1,2,3]), [1,2,3]) == true);
console.log(cmpArr(removeDupes([1,4,4,4,2,2,4,4,4]), [1,4,2]) == true);

//NEW


