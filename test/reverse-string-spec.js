// Your code here
const chai = require("chai");
const  expect  = chai.expect;
const reverseString = require("../problems/reverse-string.js");

describe("reverseString", function () {

    it("must reverse the input string", function () {
        let input = reverseString("fun");

        expect(input).to.equal("nuf");
    })

    it("Should throws TypeError when the passed argument is not a string.", function () {
        expect(() => reverseString(10)).to.throw(TypeError, "Invalid argument! Must be a string");


    })
})
