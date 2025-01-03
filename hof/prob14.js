const Input= [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ]
  
  const filterInput=Input.filter((item)=>{
     if(item.tasksCompleted>5){
         return item
     }
  })
  // console.log(filterInput)
  
  const mappedInput=filterInput.map((item)=>{
      if(item.rating>4.5){
          item.performance='Excellent'; 
      }else if(item.rating>4.5){
          item.performance='Good'; 
  }else{
       item.performance='Needs Improvement'; 
  }
  
  return {name:item.name,performance:item.performance}
  })
  mappedInput.sort((a,b)=>{
      const order={ "Excellent": 3, "Good": 2, "Needs Improvement": 1 }
       return order[b.performance] - order[a.performance];
  })
  console.log(mappedInput)
  