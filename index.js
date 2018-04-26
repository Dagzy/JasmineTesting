//Initial File For An Introduction To JasmineJS

module.exports = {

    someTest: function firstTest(x, y) {
        sum = x + y;
        return sum;
    },

    conditionTest: function conditionTest(myString) {
        if (typeof myString != 'string') {
            return "Please pass a string as the first argument"
        } else {
            return "Test succeeded"
        }
    },

    testDriven: function testDriven(bool1, bool2){
        this.bool1 = bool1;
        this.bool2 = bool2;
        if(bool1 == true && bool2 == false){
            this.bool1 = !this.bool1
        };
        return this.bool1;

    },

    checkType: function checkType(myVar){
        return myVar
    }
}
module.exports.testDriven(true, false)

// var mySum = firstTest(1, 2); var otherSum = firstTest(4, 5);
// console.log(mySum + otherSum);