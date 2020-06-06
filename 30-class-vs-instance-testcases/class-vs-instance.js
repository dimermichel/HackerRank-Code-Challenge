// https://www.hackerrank.com/challenges/30-class-vs-instance/problem



function Person(initialAge){
    // Add some more code to run some checks on initialAge
    let age = initialAge;
    if (age < 0) {
        age = 0;
        console.log('Age is not valid, setting age to 0.');
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if (age < 13) console.log('You are young.');
    if (age >= 13 && age < 18) console.log('You are a teenager.');
    if (age >= 18) console.log('You are old.');
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          age++
   };
}

