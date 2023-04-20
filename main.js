let productos = [];
let carrito = [];
class producto {
    constructor(categoria, descripcion, id, nombre, precio, image){
        this.category = categoria;
        this.description = descripcion;
        this.id = id;
        this.title = nombre;
        this.price = precio;
        this.image = image;
    }
}

const pvthor = new producto ("Bazar", "Posavasos de Thor", 21, "Thor",550,"../img/thorposavasos.png");
const pvshield = new producto ("Bazar", "Posavasos de Shield", 22, "Shield",550,"../img/shieldposavasos.png");
const pvbpanter = new producto ("Bazar", "Posavasos de Pantera Negra", 23, "Bpanther",550,"../img/bpantherposavasos.png");
const pvironm = new producto ("Bazar", "Posavasos de Iron Man", 24, "IronMan",550,"../img/ironmanposavasos.png");
const pvdrstrange = new producto ("Bazar", "Posavasos de Dr.Strange", 25, "Dr.Strange",650,"../img/drstrangeposavasos.png");
const pvhulk = new producto ("Bazar", "Posavasos de Hulk", 26, "Hulk",550,"../img/hulkposavasos.png");

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    data.push(pvthor,pvshield,pvbpanter,pvironm,pvdrstrange,pvhulk)
    productos = data;
    guardarProdLS(productos);
    recorrerProd()
    })
    .catch(error => {
    console.error(error);
    });


let prodLS = productos;
let prodsLS = JSON.stringify(prodLS);

function guardarProdLS(prodsLS){
    localStorage.setItem("productos", JSON.stringify(prodsLS))
}    


function recorrerProd (){
    productos.forEach((producto)=> {
        const divProd = document.getElementById("newProd");
        const img = document.createElement("img");
        const divTitle = document.createElement("div");
        const btn = document.createElement("button");
        img.src = producto.image;
        img.className = "img__prod";
        divTitle.innerText = producto.description;
        divTitle.className = "txt__prod";
        btn.innerText = "Agregar al carrito";
        btn.className = "addCart_prod";
        btn.id = "agregar";
        divProd.appendChild(img);
        divProd.appendChild(divTitle);
        divProd.appendChild(btn);
        btn.addEventListener("click", ()=> {
            carrito.push(producto)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu producto fue agregado al carrito',
                showConfirmButton: true,
                timer: 2500
            });
            guardarProdLS(carrito);
        })
    })
}



