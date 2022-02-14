/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */
const fs = require('fs');

const args = process.argv.slice(-1);
let result = "Solo ingresar numeros mayores a cero";
if(args > 0 && typeof Number(args) === 'number'){
    if(args == 1){
        result = 1;
    }else if(args == 2){
        result = 2;
    }else{
        result = (args - 1) + (args - 2);
    }
}

const fileContent = `Resultado ${result}`;
const filepath = "output.txt";

fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 


console.log(`Running question #1 with args ${args}`)
