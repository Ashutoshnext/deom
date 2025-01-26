const container = document.querySelector('.container');


// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json())
//     .then(data => console.log(data))

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => Render(data))


function Render(data) {
    data.map((item) => {
        const todo = document.createElement('div')
        const title = document.createElement('h4')
        title.innerHTML = item.title;
        title.classList.add(item.completed ? "completed" : "not-completed");
        span = document.createElement("span")
        span.textContent = item.completed ? "✔️" : "❌"
        todo.append(title, span)
        container.append(todo)

    })

}
