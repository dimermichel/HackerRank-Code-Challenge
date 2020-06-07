// https://www.hackerrank.com/challenges/30-review-loop/problem

function processData(input) {
    //Enter your code here
    input = input.split("\n")
     for(let i = 0; i < input.length; i++) {
      let evenStr = '';
      let oddStr = '';
       let newStr = input[i]
       newStr = newStr
        if (i === 0) continue
        else {
         for(let j = 0; j < newStr.length; j++) {
             if (j % 2 === 0 ) evenStr = evenStr + newStr[j];
            else  oddStr = oddStr + newStr[j];
         }
        }
        console.log(`${evenStr} ${oddStr}`);
     }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});