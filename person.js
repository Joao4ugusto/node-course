class Person {
  constructor(name){
    this.name = name;
  }
  displayName(){
    return `my name is ${this.name}`
  }
}

module.exports = Person;