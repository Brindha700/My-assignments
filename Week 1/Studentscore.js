let score = 96
let grade = evaluateGrade(score)
console.log(`${grade} ${score} `);


function evaluateGrade(mark) {
    switch (true) {
        case (mark>=90 && mark<=100):
            classgrade="A"
            break;

        case (mark>=80 && mark<=90):
            classgrade="B"
            break;

        case (mark>=70 && mark<=80):
            classgrade="C"
            break;

        case (mark>=60 && mark<=70):
            classgrade="D"
            break;

        case (mark>=0 && mark<=60):
            classgrade="F"
            break;   

        default:
            classgrade = "Invalid score"
            break;
    }
    return classgrade
    
}