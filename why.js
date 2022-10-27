const student1 = {
  name: "Bob",
  age: 24,
  grade: 8,
  average: function () {
    return this.grade / 3;
  },
};

const student2 = {
  name: "Ion",
  age: 30,
  grade: 9,
  average: function () {
    return this.grade / 3;
  },
};

const student3 = {
  name: "Ana",
  age: 45,
  grade: 10,
  average: function () {
    return this.grade / 3;
  },
};

student1.average();
