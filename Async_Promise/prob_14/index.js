function task1(callback){
    setTimeout(()=>{
        console.log('Task1 is complete')
        callback()
    },1000)
}
function task2(callback){
    setTimeout(()=>{
        console.log('Task2 is complete')
        callback()
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log('Task3 is complete')
        callback()
    },1000)
}
function task4(callback){
    setTimeout(()=>{
        console.log('Task4 is complete')
        callback()
    },1000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All Task is completed")
            })
        })
    })
})



