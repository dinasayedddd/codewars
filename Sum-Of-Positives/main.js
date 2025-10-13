//2. Sum Of Positives

//1
function positivesSum(arr){
    return arr.filter((x) => x>0).reduce((acc,current) => acc+current,0)
}
console.log(positivesSum([1,-4,9,5]));


//2
// function positivesSum(arr){
// let intiValue = 0;
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] > 0){
//         intiValue+=arr[i];
//     }
// }
// return intiValue;
// }

// console.log(positivesSum([1, -4, 9,, 5]));



















