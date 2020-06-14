// https://www.hackerrank.com/challenges/30-inheritance/problem



class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id, scores);
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.scores = scores;
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    this.calculate = () => {
        let sum = this.scores.reduce((acc, curVal) => acc + curVal) / this.scores.length
            if (sum >= 90 && sum <= 100) return 'O';
            if (sum >= 80 && sum < 90) return 'E';
            if (sum >= 70 && sum < 80) return 'A';
            if (sum >= 55 && sum < 70) return 'P';
            if (sum >= 40 && sum < 55) return 'D';
            if (sum < 40) return 'T';
        }
    }
}

