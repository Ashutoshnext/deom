
const inputText = document.getElementById('textField');
const ChangeBackgroundbtn = document.getElementById('ChangeBackground')
const UpdateTextbtn = document.getElementById('UpdateText')
const container = document.getElementById('container')


ChangeBackgroundbtn.addEventListener('click', () => {
    const inputColor = document.getElementById('colorField').value;
    if (inputColor) {
        container.style.backgroundColor = inputColor;
        if (container.style.backgroundColor === "") {
            alert("Invalid color name!"); 
            container.style.backgroundColor = ""; 
          }
        
    }else{
        alert('please fill  color')
    }
})

UpdateTextbtn.addEventListener('click',()=>{
    const inputText = document.getElementById('textField').value;
    const container = document.getElementById('container')
    if(!inputText){
        alert( "Please enter some text!")
    }else{
    container.textContent=inputText;
}
    
   
})