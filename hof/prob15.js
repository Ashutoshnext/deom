const Input= [
    { name: "Laptop", category: "Electronics", stock: 50,pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
  ]
  
  
  
  const filterInput=Input.filter((item)=>{
      if(item.stock<100){
          return item;
      }
  })
  // console.log(filterInput)
  
  const result = filterInput.reduce((acc, item) => {
    
    const restockCost = (100 - item.stock) * item.pricePerUnit;
    
     
     
    if (acc[item.category]) {
      acc[item.category] += restockCost;
    } else {
      acc[item.category] = restockCost;
    }
    return acc;
    
  }, {});
   console.log(result)
  