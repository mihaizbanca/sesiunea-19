class Student {
  constructor(name, age, grade) {
    // this = {}
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  sayHello = function () {
    console.log("Hello", this);
  };

  average = function () {
    return this.grade / 3;
  };

  myAge = 100;
  console.log(); // intr-o clasa codul nu se ruleaza, fiind doar un sablon
  //return this
}

const student1 = new Student("Bob", 35, 8);
console.log(student1);

student1.sayHello();

console.log();
