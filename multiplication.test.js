const multiplication = require('./multiplication');

describe('multiplication', ()=>{
    test('it multiplies two numbers correctly', () => {
        expect(multiplication(1,2)).toEqual(2)
    })

    test('it will return null if input does not contain two numbers', () => {
        expect(multiplication(1)).toEqual(NaN);
        expect(multiplication(1,"a")).toEqual(NaN);
        expect(multiplication("a",1)).toEqual(NaN);
        expect(multiplication("a","b")).toEqual(NaN);
        expect(multiplication()).toEqual(NaN);
    })
})