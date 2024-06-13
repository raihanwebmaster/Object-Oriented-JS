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
