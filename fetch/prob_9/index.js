const btn=document.getElementById('btn')
const Cart=document.getElementById('cart')



btn.addEventListener('click',()=>{
    const searchInput=document.getElementById('searchInput').value
    fetch(`http://www.omdbapi.com/?apikey=796d6c84&t=${searchInput}`)
.then(res=>res.json())
.then(data=>Render(data))

})

function Render(data){
    Cart.innerHTML=""
    const poster=document.createElement('img')
    poster.src=data.Poster
    const title=document.createElement('h4');
    title.textContent=data.Title
  Cart.append(poster,title)
}