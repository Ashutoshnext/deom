const container=document.querySelector('.container')

const btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    fetch("https://reqres.in/api/users")
    .then(res=>res.json())
    .then(Response=>Render(Response.data))
})

function Render(data) {
    data.forEach((item)=>{
        
        const div=document.createElement('div')
        div.classList.add('cart')
        const image=document.createElement('img')
        image.src=item.avatar
        const Name=document.createElement('h4')
        Name.textContent=`${item.first_name} ${item.last_name}`
        const email=document.createElement('p')
        email.textContent=item.email
      div.append(image,Name,email)
      container.append(div)
    })
}

