/*
Purpose: Review JS concepts
Prototypes vs Clones
Regular functions, anonymous functions, arrow functions
Callback functions
MERN: N stands for node.js
*/
var globalVariable = 100
let localVariable = 100

// var  is global vs. let is local
function Name(){
    let varInFunc = "local"
}
//console.log(varInFunc)

//Prototype
const oneTimeUseObj = {
    prop1: "Keagan",
    prop2: "comp3123",
    method1: function (param1){
        console.log(param1)
    }
}

console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1("pizza")

//prototype - using a constructor
function Student(student_name_p, course_p, lunch_p){
    this.student_name = student_name_p
    this.course = course_p
    this.lunch = lunch_p
    this.method1 = function (param_1){
        return param_1
    }
}

const morning_student = new Student("Keagan", "comp3123", "noodles" )
console.log(morning_student)
console.log(morning_student.student_name)
console.log(morning_student.course)
let lunch = morning_student.method1(morning_student.lunch)
console.log(lunch)

//Classes always have constructors
class Prof{
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }
    method1(lunch){
        console.log(lunch)
    }
}
const morning_prof = new Prof("Laily")
console.log(morning_prof.prof_name)
morning_prof.method1("pizza")