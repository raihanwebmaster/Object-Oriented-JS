var obj = {
    name: 'raihan',
    print: function () {
        console.log(this.name);
    }
}
obj.print(); // raihan



function myFunc() {
    console.log(this);
}
myFunc(); // Window


var person = {
    name: 'raihan',
    print: function () {
        console.log(this.name);
    }
}

person.print(); // raihan

var myName = person.name;
console.log(myName); // raihan

var myPrint = person.print;
myPrint(); // undefined

var myP = person.print.bind(person);
myP(); // raihan



function add(number) {
    console.log(this);
    return this.value + number;
}
add(10); // NaN
const result = new add(10);


const number = {
    value: 10
}
const binded = add.bind(number);
console.log(binded(20)); // 30


var p4 = { 
    name: 'Raihan',
    print: function(){
        setTimeout(function(){
            console.log(this.name);
        }.bind(this), 2000);
    }
 };

p4.print(); // Raihan


