function sayHello_1(){
  console.log('Hello!');
}
sayHello_1();

function sayHello_2(name : string, age : any){
  console.log('Hello! ' + name + ' ' + age);
}
sayHello_2("Tadayoshi", 20);
sayHello_2('Tadayoshi', 21);

function sayHello_3(name: string, age : any, address = 'CS MSU'){
    console.log('Hello! ' + name + ' ' + age + ' ' + address);
}
sayHello_3("Tadayoshi", 20);
sayHello_3('Tadayoshi', "20", 'Computer Science MSU');


function sayHello(name : string, age : any, address? : string){
  console.log('Hello! ' + name + ' ' + age + ' ' + address);
}
sayHello("Tadayoshi", 20);
sayHello("Tadayoshi", "20", 'Computer Science MSU');