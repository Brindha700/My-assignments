//Declare and initialize the variable
let Num= -1

CheckNumber(Num)
function CheckNumber(Num)//Create a function named that takes a number as a parameter.
{  

if(Num>0){ //Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
//and to handle the case when the number is zero
    console.log("Number is positive :"+Num)
}else if(Num===0){ 
console.log("Number is Neutral :"+Num)
}
else{
    console.log("Number is Negative :"+Num)
}
}
