// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
    //Enter your code here
    let arr = input.split("\n")
    let newMap = new Map()
    let names = arr
        .filter( (elm, idx, arr) => {
          if ( idx > 0 && idx <= arr[0] ) {
            let keyValue = elm.split(' ')
            newMap.set( keyValue[0], keyValue[1])
          } 
          if ( idx > arr[0] ) return elm
        })
        .map( name => {
          let result = newMap.get(name)
          if (result) console.log ( `${name}=${result}`)
          else console.log (`Not found`)
        })
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
