// Task #1

let user = {
    name: "John",
    surname: "Smith"
};

user.name = 'Pete';
delete user.name;

console.log(user);

// Task #2

//Будет работать так как мы меняем обьект а не значение переменой


// Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = (salaries.John + salaries.Ann + salaries.Pete);
console.log(sum);