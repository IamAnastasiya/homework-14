"use strict";


let person1 = {firstName: 'Johnny', lastName: 'Depp'};
let person2 = {firstName: 'Jessica', lastName: 'Chastain'};

function say(greeting, greeting2) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + greeting2);
}

let myOwnApply = function (func, context, args) {
    return func.call(context, ...args);
}

myOwnApply (say, person1, ["Hello", " glad to see You"]);
myOwnApply (say, person2, ["Hello", " glad to see You"]);

function sayHello() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

let myOwnBind = function (func, context, ...rest) {
    return function(...args) {
        return func.call(context, ...rest.concat(args));
    }
}

let sayHelloJohnny = sayHello.bind(person1);
let sayHelloJessica = sayHello.bind(person2);

sayHelloJohnny("Hello");
sayHelloJessica("Hello");

