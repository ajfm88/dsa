/*Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in 
the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.*/

function countUniqueValues(arr){
    // holding i
    let i = 0
    // loop over the array, j should always be ahead of i
    for(j = i + 1; j < arr.length; j++) {
        console.log(arr[j])
        console.log(arr[i])
        if (arr[i] !== arr[j]){
            // set the value of j to i
            arr[i] = arr[j]
            console.log(arr[i])
            console.log(arr[j])
            // make i move up ONE right before j
            i = j - 1
        }
    }
    console.log(i)
    return i + 1;
}

arr = [1,1,1,1,1,2]

console.log(arr)

countUniqueValues(arr) // 2

console.log(arr)

// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// The idea is 
// i
// [1,1,1,2,3,3,4,4,5,6]
//      j