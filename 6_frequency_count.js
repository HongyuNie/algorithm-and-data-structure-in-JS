//exercise 1
//given two positive integers
//find out if the two numbers have the same frequency of digits

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {}; //hash map
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}




//exercise 2
//given a list of number, return true if it contains duplicates.
// solution1: frequency counter
function areThereDuplicates_1() {
    let collection = {}
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (let key in collection){
        if (collection[key] > 1) return true
    }
    return false;
}

//multiple pointers
function areThereDuplicates_2(...args) {
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if (args[start] === args[next]) {
            return true
        }
        start++
        next++
    }
    return false
}

//one liner solution
function areThereDuplicates_3() {
    return new Set(arguments).size !== arguments.length;
}