//Initial File For An Introduction To JasmineJS

module.exports = {
    
    
    someTest: function firstTest(x, y) {
        sum = x + y;
        return sum;
    },

conditionTest: function conditionTest(myString){
    if(typeof myString != 'string'){
        return "Please pass a string as the first argument"
    }
    else{
        return "Test succeeded"
    }
}
}


// var mySum = firstTest(1, 2); var otherSum = firstTest(4, 5);
// console.log(mySum + otherSum);