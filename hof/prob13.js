const task1=(callback)=>{
    setTimeout(()=>{
        console.log('task1 complete');
        callback()
    },1000)
    
}
const task2=(callback)=>{
     setTimeout(()=>{
        console.log('task2 complete');
        callback()
    },1000)

}
const task3=(callback)=>{
    setTimeout(()=>{
        console.log('task3 complete')
        callback()
    },1000)
}
const task4=(callback)=>{
    setTimeout(()=>{
        console.log('task4 complete');
        callback()
    },1000)
}

// task1(task2(task3(task4())))
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log('All task complete')
            })
        })
    })
})

