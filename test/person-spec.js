// Your code here
const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person.js");

let person1;
let person2;
let typeErrorMessage;
beforeEach(() => {
    person1 = new Person("Hussain", 30);
    person2 = new Person("Ali", 40);
    typeErrorMessage = "The passed argument is not a valid object.";
});
describe("Person Class.", function () {
    describe("Constructor.", function () {

        it("Should create an instance of Person with name and age properties.", function () {
            expect(person1.name).to.equal("Hussain");
            expect(person1.age).to.equal(30);
        });
        it("Should the properties name and age exist in the instance.", function () {
            expect(person1.name).to.exist;
            expect(person1.age).to.exist;
        });

    });

    describe("sayHello instance Method.", function () {
        it("Should return a string of the person's name and a greeting message.", function () {

            expect(person1.sayHello()).to.equal('Hi, Hussain. Nice to meet you.');
        });
    });

    describe("visit instance method.", function () {

        it("Should return a string that stating this instance visited the passed in person instance.", function () {
            expect(person1.visit(person2)).to.equal('Hussain visited Ali.');
        });
    });

    describe("switchVisit instance method.", function () {
        it("Should invoke visit method and pass this person instance in.", function () {
            expect(person1.switchVisit(person2)).to.equal("Ali visited Hussain.");
        });
    });

    describe("update instance method.", function () {

        context("If the incoming argument is not valid object.", function () {

            it("Should throw a TypeError if the incoming argument is not an object.", function () {

                expect(() => person1.update(([]))).to.Throw(TypeError, typeErrorMessage);
                expect(() => person1.update("Hello!")).to.throw(TypeError, typeErrorMessage);
                expect(() => person1.update([1, 2, 3])).to.throw(TypeError, typeErrorMessage);
                expect(() => person1.update("")).to.throw(TypeError, typeErrorMessage);
                expect(() => person1.update({ })).to.throw(TypeError, typeErrorMessage);
                expect(() => person1.update(() => { })).to.throw(TypeError, typeErrorMessage);

            });

            it("Should throw a TypeError if the incoming argument is object but do not has name and age peoperties.", function () {

                expect(() => person1.update({})).to.throw(TypeError, typeErrorMessage);
                expect(() => person1.update({ name: "AAAA" })).to.throw(TypeError, typeErrorMessage);
                expect(() => person1.update({age: 25})).to.throw(TypeError, typeErrorMessage);
            });
        });

        context("If the incoming argument is a valid object.", function () {

            it("Should update the properties of the instance with the incoming object.", function () {
                let obj = { name: "DDDD", age: 24 };
                person1.update(obj);

                expect(person1.name).to.equal("DDDD");
                expect(person1.age).to.equal(24);
            })
        });
    })


})
