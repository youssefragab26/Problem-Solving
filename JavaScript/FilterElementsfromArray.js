
let arr =[0,10,20,30]
var filter = function(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > fn){
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(filter(arr, 10)) // [20, 30]