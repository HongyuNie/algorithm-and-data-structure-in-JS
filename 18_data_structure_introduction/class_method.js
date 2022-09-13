// Refer to ES6(ES 2015):

class Student {
    //waht default properties should it have?
    constructor(firstName, lastName, year){
        // this refer to the object create from that class, aka, an instance.
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    //instance methods: act on the individual instance like "firstStudent" below
    //what should each object created from this class be able to do?
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }

    //static method can not be called through a class distance: Only Student.enrollStudents() works! not firstStudent.enrollStudents()
    static enrollStudents(){
        return "ENROLLING STUDENTS!";
    }
    
}

let firstStudent = new Student("Colt", "Steele",1);
console.log(firstStudent.fullName());
let secondStudent = new Student("Blue", "Steele",2);

//an example of how you call the static method:
console.log(Student.enrollStudents());

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  
  //here is another example of how you call the static method:
  console.log(Point.distance(p1, p2)); // 7.0710678118654755