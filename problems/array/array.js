// Given an array of positive integers arr[] of size n, 
// the task is to find second largest distinct element in the array.

let arr1=[12, 35, 1, 10, 34, 1];

// find second largest number in this array without sorting 

// function findSecondLarge(arr1){
//     for(let i=0;i<arr1.length;i++){
//         let largestN
//         if(arr1[i]>arr1[i+1]){
//           largestN=arr1[i]
//         }{
//             largestN=arr1[i+1]
//         }
//         for(let j=0;j<arr1.length;j++){
//             let lessdiff1=largestN-arr1[j];
//            let lessdiff2=largestN-arr1[j+1]
//            if(lessdiff1<lessdiff2){
//             console.log("dif2",lessdiff2)
//             return lessdiff2,arr1[j+1]
//            }else if(lessdiff1==lessdiff2){
//             continue
//            }else{
//             console.log("dif1",lessdiff1)
//             lessdiff1,arr1[j]
//            }
//         }
  
//     }
// }
// console.log(findSecondLarge(arr1));
function findSecondLargest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}


console.log(findSecondLargest(arr1)); // Output: 34
