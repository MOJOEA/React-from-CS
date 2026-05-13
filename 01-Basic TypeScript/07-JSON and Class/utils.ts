const json1 = {
  name: "Tadayoshi",
  age: 20,
  work: "Computer Science, MSU",
  show(){
    console.log(this.name);
  }
};
console.log(typeof(json1));
console.log(json1);
console.log(json1.name);
json1.show();

const json2 = {
  name: "Tadayoshi",
  age: 20,
  work: "Computer Science, MSU",
  show(){
    console.log(this.name);
  }
};
console.log(typeof(json2));
console.log(json2);
console.log(JSON.stringify(json2));
console.log(json2.name);