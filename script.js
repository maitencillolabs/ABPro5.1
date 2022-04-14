function traer() {
    fetch("tabla.json")
        .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
        .then(datos => {
            tabla(datos)
            console.log (datos)

        })
    }
let verPost=document.getElementById('postBlog');
function tabla(datos){
    verPost.innerHTML = ''
    datos.map (e=>{
    verPost.innerHTML+= `<div class="card">
    <div class="card-body">
      <h4 class="card-title">${e.titulo}</h4>
      <h6 class="card-subtitle mb-2 text-muted">${e.subtitulo}</h6>
      <p class="card-text">${e.text}.</p>
      <a href="${e.link}" class="card-link">Conoce Más</a>
      <button onclick="agregarFav()" type="button" class="btn btn-success">Agregar a Favoritos</button>
    </div>
    </div>`})
}
function buscar() {
    fetch("tabla.json")
        .then(resultadoTabla => resultadoTabla.json()) // FORMATO QUE VAMOS A RECIBIR NUESTRA INFORMACIÓN
        .then(e => {
           buscarPost(e)
            console.log (e)

        })
    }

 function buscarPost(e) {
    verPost.innerHTML=""
    const buscarPost = document.getElementById("buscarF").value
    if(buscarPost == "")
    {
      alert("Su Busqueda está vacia")
    }
else if (!isNaN(buscarPost)) 
  {
    alert("no puede ingresar numeros");
 }


    else{const nombrePost = buscarPost.toLowerCase()
    const filtrarPost = e.filter(e => {
      const nuevoNombre = e.titulo
      const transformarNombre = nuevoNombre.toLowerCase()
      if(filtrarPost==""){
        return alert("No se encuentra ningun Post")}
      return transformarNombre == "" ?  traer() : transformarNombre.includes(nombrePost)
    })
 
    filtrarPost.map((e) => {
      verPost.innerHTML += `<div class="card">
    <div class="card-body">
      <h4 class="card-title">${e.titulo}</h4>
      <h6 class="card-subtitle mb-2 text-muted">${e.subtitulo}</h6>
      <p class="card-text">${e.text}.</p>
      <a href="${e.link}" class="card-link">Conoce Más</a>
      <button id="agregar" onclick="agregarFav()" type="button" class="btn btn-success">Agregar a Favoritos</button>
    </div>
    </div>`
    })}
  }
//agregar a favoritos

const addToFavoritosButtons = document.querySelectorAll('.btn-success');
addToFavoritosButtons.forEach((addToFavoritosButton) => {
    addToFavoritosButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);
const verFav = document.getElementById("favoritos");


function addToFavClicked(event) {
    const button = event.target;
    const item = button.closest('.item');
  
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;
  
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
  }
const postTitle=
  function agregarFav(){
      verFav.innerHTML += `<div class="card text-white bg-success mb-3" style="max-width: 20rem;">
      <div class="card-header">${e.titulo}</div>
      <div class="card-body">
        <h4 class="card-title">${e.subtitulo}</h4>
        <p class="card-text">${e.text}</p>
      </div>
    </div>`

  }