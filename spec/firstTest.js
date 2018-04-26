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
