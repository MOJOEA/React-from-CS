class User {
  private name: string = "";
  private age: number = 0;
  public work: string = "";
  constructor(name: string) {
    this.name = name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public set Age(age: number) {
    this.age = age;
  }

  public get Age() {
    return this.age;
  }
}

let user : User = new User('Tadayoshi');
user.Age = 20;
user.work = 'CS MSU'
console.log(`${user.getName()} ${user.Age} ${user.work}`);

user.setName("Potchara");
console.log(`${user.getName()} ${user.Age} ${user.work}`);