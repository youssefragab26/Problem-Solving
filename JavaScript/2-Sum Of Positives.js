//You get an array of numbers,return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there nothing to sum, the sum is default to 0.


//InitValue = 0
//Array Loop
//Check if the number is positive or not
//Add the number to the initValue if positive

function sumOfPositives(arr) {
    let initValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            initValue += arr[i]
        }
    }
    return initValue
}
console.log(sumOfPositives([2, -1, -16, 8, 5, 8,]))