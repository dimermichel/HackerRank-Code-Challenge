// https://www.hackerrank.com/challenges/30-binary-numbers/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

let count = 1;
let max = 1;
function binary(n) {
   let binArr = n.toString(2).split('');
   binArr.map((el, index, arr) => {
       if(el === arr[index + 1]){
           count++
           if (count > max) max = count;
       } else count = 1;
       })
   console.log(max);
}

function main() {
    const n = parseInt(readLine(), 10);
    binary(n);
}
