//3. Sum-Without-The-Highest-And-The-Lowest-Number


//1
function SumWithoutTheHighestAndTheLowestNumber(arr){
        if(arr==null)return 0;
        return arr.sort((a,b)=>a-b).slice(1,-1).reduce((acc,current)=>acc+current,0)
}
console.log(SumWithoutTheHighestAndTheLowestNumber([1,2,3,4,5]))



//2
// function SumWithoutTheHighestAndTheLowestNumber(arr){
//      if(arr==null)return 0;
//     return arr.filter((x)=> x !== Math.max(...arr) && x !== Math.min(...arr)).reduce((acc,current)=>acc+current,0);
// }
// console.log(SumWithoutTheHighestAndTheLowestNumber([1,2,3,4,5]))



//3
// function SumWithoutTheHighestAndTheLowestNumber(arr){

//     if(arr==null)return 0;
//     let maxValue=Math.max(...arr);
//     let minValue=Math.min(...arr);
//     let filterArray=arr.filter((x)=>x!==maxValue&&x!==minValue);
//     let sumNewArray=filterArray.reduce((acc,current)=>acc+current,0);
//     return sumNewArray
// }
// console.log(SumWithoutTheHighestAndTheLowestNumber([1,2,3,4,5]))















