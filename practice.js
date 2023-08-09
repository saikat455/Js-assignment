// prblm 1
// function cubeNumber(number) {
//     if(typeof number !== 'number' || number<=0){
//         return "Please enter a positive number";
//     }
//     return number*number*number;
// }

// const cubeNum = cubeNumber(6);
// console.log(cubeNum);


// prblm 2
// function matchFinder(string1, string2) {
//     if(typeof string1 !== 'string' || typeof string2 !== 'string'){
//         return "Please enter a valid string";
//     }
    
//     if(string1.includes(string2)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const match = matchFinder("Peter Parker", "pet");
// console.log(match);


// function sortMaker(arr) {
//     if(!Array.isArray(arr) || arr.length !==2) {
//         return "Invalid Input";
//     }
//     else if (arr[0] < 0 || arr[1] < 0){
//         return "Invalid Input";
//     }
//     else if(arr[0] === arr[1]){
//         return "equal";
//     }
//     else if(arr[0] < arr[1]){
//         let temp = arr[0];
//         arr[0] = arr[1];
//         arr[1] = temp;
//     }
//     return arr;
// }

// const sort = sortMaker([3,2]);

// console.log(sort);


// function findAddress(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return "Please provide a valid input object.";
//     }

//     const street = obj.street || '__';
//     const house = obj.house || '__';
//     const society = obj.society || '__';

//     return street + ',' + house + ',' + society;
// }

// Sample inputs and outputs
// console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" })); // Output: "10,15A,Earth Perfect"
// console.log(findAddress({ street: 10, society: "Earth Perfect" })); // Output: "10,__,Earth Perfect"
// console.log(findAddress({ street: 10 })); // Output: "10,__,__"
// console.log(findAddress(null)); // Output: "Please provide a valid input object."





// function canPay(changeArray,totalDue){
//     if(!Array.isArray(changeArray)) {
//         return "Please provide a valid array";
//     }
//     if (changeArray.length === 0) {
//         return "changeArray is empty.";
//     }
//     let sum = 0;
//     for (let i=0;i<changeArray.length;i++){
//         sum += changeArray[i];
//     }
//     if(sum >= totalDue){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const changeArray = [1,5,4];
// const totalDue = 10;
// console.log(canPay(changeArray, totalDue));