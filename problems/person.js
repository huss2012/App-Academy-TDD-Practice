class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi, ${this.name}. Nice to meet you.`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}.`;
  }
  switchVisit = (otherPerson) => otherPerson.visit(this);

  update(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj) || !Object.keys(obj).includes("name") || !Object.keys(obj).includes("age")) {
      throw new TypeError("The passed argument is not a valid object.");
    };
    this.name = obj.name;
    this.age = obj.age;
  }
}

//----------Local Test Area-----------------
const person1 = new Person("Hussain", 30);
const person2 = new Person("Ali", 30);
//Update case:
person1.update({ name: "DDDD", age: 24 })
console.log(person1);
//passing only name:
// person1.update({ name: "DDDD"})
// console.log(person1);
//passing only age:
// person1.update({ age: 24 })
// console.log(person1);
//Passing empty object:
// person1.update({ })
// console.log(person1);
//Passing string:
// person1.update("Hussain");
// console.log(person1);
//Passing function:
// person1.update(() => { })
// console.log(person1);
//Passing array:
// person1.update([]);
// console.log(person1);
console.log(person1.switchVisit(person2));
console.log(person1.visit(person2));
module.exports = Person;
