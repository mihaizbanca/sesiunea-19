console.log(this);

// function showMeThis() {
//   console.log(this);
// }

// showMeThis();

console.log(this);

const cat = {
  name: "Garfield",
  showThis: function () {
    this.name = "Azorel";
    this.color = "Black";
    console.log(this);
  },
};

console.log(cat);
cat.showThis();

const newCat = cat;
newCat.showThis();

const localShowThis = cat.showThis;
localShowThis();
