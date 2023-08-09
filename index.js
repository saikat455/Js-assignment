function cubeNumber(number) {
    if(typeof number !== 'number' || number<=0){
        return "Please enter a positive number";
    }
    return number*number*number;
}


function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please enter a valid string";
    }
    
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}


function sortMaker(arr) {
    if(!Array.isArray(arr) || arr.length !==2) {
        return "Invalid Input";
    }
    else if (arr[0] < 0 || arr[1] < 0){
        return "Invalid Input";
    }
    else if(arr[0] === arr[1]){
        return "equal";
    }
    else if(arr[0] < arr[1]){
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }
    return arr;
}


function findAddress(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Please provide a valid input object.";
    }

    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    return street + ',' + house + ',' + society;
}