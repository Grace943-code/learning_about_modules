import chalk from 'chalk';
import greet from './greet.js';

import fun from "everyday-fun";

import figlet from 'figlet';

//  import the greet module that is in the current folder using CommonJS
// const greet = require('./greet')
// console.log(chalk.blue(greet('Xola')));
// console.log(chalk.red(greet('Grace')));
// call the function & print the result on the screen
// console.log(greet('Xola'))
// console.log(greet('Grace'))
// console.log(fun.getRandomRiddle());

figlet('The riddler', function(err, result){
    console.log(result);

    const riddle = fun.getRandomRiddle();

    console.log(chalk.bgGreen(riddle.riddle));

    setTimeout(function() {
        console.log(chalk.bgGreen.bold(riddle.answer))
    }, 5000)
});