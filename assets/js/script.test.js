const {sumNumbers} = require('./script');


describe("testing functions with sum", () =>{
    test("Should return 23", () =>{
        expect(sumNumbers(10)).toBe(23);
    })
    test("Should return 33", ()=>{
        expect(sumNumbers(11)).toBe(33);
    })
    test("Should return zero", ()=>{
        expect(sumNumbers('')).toBe(0);
    })
})