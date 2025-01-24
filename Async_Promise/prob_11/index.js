function displaymassage(name){
    console.log(`I am ${name}`)
}


function input(callback){
    setTimeout(()=>{
        displaymassage('rinki')
    },5000)
  
}
input(displaymassage)