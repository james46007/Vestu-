/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  let array = String(str).split('');
  let arrayAux = [];
  array.some(item => {
    if(item == ")"){
      if(arrayAux.pop() != "("){
        return true;
      }
    }else if(item == "}"){
      if(arrayAux.pop() != "{"){
        return true;
      }
    }else if(item == "]"){
      if(arrayAux.pop() != "["){
        return true;
      }
    }else if(item == "(" || item == "{" || item == "["){
      arrayAux.push(item)
    }
  });
  return arrayAux.length > 0 ? false : true;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);

