
// Declare and initialize the variable 
let number=20

// Call the function and print the result
isOddOrEven(number)

//Create a function named `isOddOrEven` that takes a number as a parameter
function isOddOrEven(i) {
    // Use a conditional statement to check if the number is divisible by 2 
    if(i%2===0){
        console.log(i + " is an Even Number")
    }
    else{
        console.log(i + " is an Odd Number")
    }
}
