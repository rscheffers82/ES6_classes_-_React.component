class Person {
  // define methods in the constructor.
  constructor (name = 'Anonymous', age = '??') {
    this.name = name;
    this.age = age;
  }
  // the below is short for getGreeting: function () {}
  getGreeting () {
    return `Hi! I'm ${this.name}.`;
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old...`;
  }
  toString () {
    return JSON.stringify(this);
  }
}

class Child extends Person {
  constructor (name, age, like) {
    super(name, age);
    this.like = like;
  }
  getGreeting () {
    return `Yoooo! My name is ${this.name} and I like ${this.like}.`;
  }

}

class Baby extends Person {
  constructor (name, age) {
    super(name, age);
  }
  getGreeting () {
    return `Baby ${this.name} says, Wahhhhhhh.....`;
  }
}


var me = new Person('Roy Scheffers', 25);

console.log( me.getGreeting() );
// console.log( me.getDescription() );

var anonymous = new Child('Zorana', 23, 'Proofreading');

console.log( anonymous.getGreeting() );
// console.log( anonymous.getDescription() );

var lila = new Baby('Lila', 0, 'eating & sleeping');

console.log( lila.getGreeting() );
