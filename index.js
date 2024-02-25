function say_hello(){
    var names = ['Bob', 'Grady', 'Stenffy', 'Vendy', 'Jordan'];
    let i = parseInt(Math.random() * 5);
    console.log(names, i)
    return 'Hello, I am ' + names[i];
}

// console.log(say_hello());
module.exports = say_hello;