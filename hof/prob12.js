
const displayMessage=(name)=>{
    return `Hello ${name}`
 }
 const getUserInput=(callback)=>{
     setTimeout(() => {
     let userName='Alice'
        console.log(displayMessage(userName))
   }, 1000);
 }
 getUserInput(displayMessage);