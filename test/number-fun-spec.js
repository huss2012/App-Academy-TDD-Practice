// Your code here
const chai = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");
const expect = chai.expect;


describe("returnsThree", function () {
    it("should return 3", function () {
        expect(returnsThree()).to.equals(3);
    })
});

describe("reciprocal", function () {
    it("Should take a number between 1 and 1000000 and return reciprocal of it", function () {
        expect(reciprocal(4)).to.equals(1 / 4);
        expect(reciprocal(4)).to.equals(0.25);
        expect(reciprocal(5)).to.equals(1 / 5);
        expect(reciprocal(5)).to.equals(0.2);

    });
    it("Should throw a TypeError is the number less then 1 or grater then 1000000.", function () {
        expect(() => reciprocal(1 / 4)).to.throw(TypeError, "input is out of range.");
        expect(() => reciprocal(2 / 4)).to.throw(TypeError, "input is out of range.");
        expect(() => reciprocal(2 / 4)).to.throw(TypeError, "input is out of range.");
    })
});
