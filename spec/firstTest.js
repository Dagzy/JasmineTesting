var firstTest = require("../index")


describe("First test", function(){
    
    it('should give me 12', function(){
        expect(firstTest.someTest(5,7)).toBe(12);
    })
//Expected output: Pass
    it('checks the condition', function(){
        expect(firstTest.conditionTest(2)).toContain("succeed")
    })
//Expected output: Failure
})

describe("Second test", function(){
    it('is my first test driven function', function(){
        expect(firstTest.testDriven(true, false)).toBe(false);
    })
//Expected output: Pass as a result of condition being met after first argument is flipped
    it('checks the type of the returned value', function(){
        expect(typeof firstTest.checkType(2)).toBe('string')
//Expected output: Failure as a result of type not evaluating correctly
    })
})
