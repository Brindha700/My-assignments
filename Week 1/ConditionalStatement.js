let BName="Chrome"

launchBrowser(BName)

function launchBrowser(BName) {
    if(BName==="Chrome") {
        console.log("Launching" + BName +"Browser");
    }
    else {
        console.log("Launching a differnt Browser")
    }
}
 
let testType="Sanity"

 runTests(testType)

function runTests (test) {
       switch (test) {
        case "Smoke":
            console.log("smoke test")
             break;

         case "Sanity":
          console.log("sanity test") 
          break;
          

         case "Regression":
          console.log("regression test") 
          break; 
       
        default:
            console.log("Default(smoke) test")

            break;
       }



}






