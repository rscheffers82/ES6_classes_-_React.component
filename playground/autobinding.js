var obj = {
  name: 'Roy Scheffers',
  printName: function () {
    console.log(`My name is ${this.name}.`);
  }
};

obj.printName();

// using the normal syntax as per the first line below, obj is not bound and there is no this specified
// setTimeout( obj.printName,1000);

// To fix this we use the .bind() method and add in the object we want to bind it to, it will be set as the 'this' value
setTimeout( obj.printName.bind(obj),1000);
