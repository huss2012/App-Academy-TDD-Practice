// Your code here
const chai = require("chai");
const myMap = require("../problems/my-map");
const expect = chai.expect;
const spies = require("chai-spies");
//const spy = chai.spy;


chai.use(spies);

describe("myMap", function () {
    let arr;
    let callback;
    let cb;
    beforeEach(() => {
        arr = [2, 4, 6];
        cb = el => el * 2;
        callback = chai.spy();
    })
    it("Should works like the built-in Arry.map() function.", function () {
        expect(myMap(arr, cb)).to.deep.equal([4, 8, 12]);
    });

    it("Should not mutate the passed-in array.", function () {
        myMap(arr, cb);
        expect(arr).to.deep.equal([2, 4, 6]);
    });

    it("Should not use the built-in Array.map() method.", function () {
        const mapSpy = chai.spy.on(arr, "map");
        myMap(arr, cb);
        expect(mapSpy).to.not.have.been.called();
    });

    it("Should passed each element into the callback function.", function () {
        myMap(arr, callback);
        expect(callback).to.have.been.called.exactly(arr.length);
    });

});
