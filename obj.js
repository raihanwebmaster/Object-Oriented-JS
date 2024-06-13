var obj = {}

var obj1 = new Object;


var book = {
    title: "The Principles of Object-Oriented JavaScript",
    author: "Nicholas C. Zakas",
    publisher: "No Starch Press",
    page: 120,
    printTitle: function() {
        console.log(this.title);
    }
};

console.log(book); // {title: "The Principles of Object-Oriented JavaScript", author: "Nicholas C. Zakas", publisher: "No Starch Press", page: 120}

console.log(book.title); // The Principles of Object-Oriented JavaScript
console.log(book["title"]); // The Principles of Object-Oriented JavaScript

book.publishedYear = 2014;
console.log(book); // {title: "The Principles of Object-Oriented JavaScript", author: "Nicholas C. Zakas", publisher: "No Starch Press", page: 120, publishedYear: 2014}


// traverse object
for (var key in book) {
    console.log(key + ": " + book[key]); 
}


////////////////////////// CLASS //////////////////////////

// class is a blueprint for creating objects with pre-defined properties and methods.
// class is a template for creating objects.
// class is a reference data type.
// class is a reference type.
// class is a user-defined data type.


function Person(name, email){
    this.name = name;
    this.email = email;
    this.print = function(){
        console.log('Name: ' + this.name);
    }
}

var p1 = new Person('Raihan', 'raihanemon2015@gmail.com'); 
console.log(p1.name); // Raihan
console.log(p1.email); // raihanemon2015@gmail.com

var p2 = new Person('Uddin', 'uddin@gmail.com');

var people = [p1, p2];
console.log(people); // [Person, Person]

people.forEach(function(person){
    console.log(person.name); // Raihan, Uddin
});

for (var key in p1) {
    console.log(key + ": " + p1[key]); 
}

function newBook(title, author, publisher, page){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.page = page;
    this.printTitle = function(){
        console.log(this.title);
    }
}

var b1 = new newBook('The Principles of Object-Oriented JavaScript', 'Nicholas C. Zakas', 'No Starch Press', 120);
console.log(b1.constructior); // [Function: newBook]
