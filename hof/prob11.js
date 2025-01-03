const Input= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

const mappedInput=Input.map((item)=>{
    return item.name
})

// console.log(mappedInput)

Input.forEach((item)=>{
    // console.log(item)
    if(item.price>50){
        console.log(`${item.name} is above $50`)
    }else{
        console.log(`${item.name} is below $50`)
    }
})
