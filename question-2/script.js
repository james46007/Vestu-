/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
const fs = require('fs');

let data = fs.readFileSync('BrowsingEvents.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

let res = data.reduce((acc, line, item, array) => {
    acc.push(line[0])
    return acc
},[])

console.log('res ',res)

console.log(`Running question #2 with args ${args}`)