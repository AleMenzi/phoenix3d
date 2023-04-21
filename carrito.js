let prodCarrito = [];

function cargarProdLS(){
    return JSON.parse(localStorage.getItem("productos")) || [];
}

prodCarrito = cargarProdLS();
console.log(prodCarrito);

function cargarCarrito(){
    prodCarrito.forEach((addProd)=> {
        const divCar = document.getElementById("box_carrito");
        const imgCar = document.createElement("img")
        const divTitleCar = document.createElement("div")
        imgCar.src = addProd.image
        imgCar.className = "img__carrito"
        divTitleCar.innerText = addProd.title
        divTitleCar.className = "txt__carrito"
        divCar.appendChild(imgCar)
        divCar.appendChild(divTitleCar)
    })
}

cargarCarrito();


