document.querySelector('#botonguardar').addEventListener('click', guardarProducto);
AgregarProductoATabla();

function guardarProducto(){
    var id = document.querySelector('#id').value;
    var nombre = document.querySelector('#name').value;
    var precio = document.querySelector('#price').value;
    var image = document.querySelector('#result-image').value;

    AgregarProducto(id, nombre, precio, image);
    AgregarProductoATabla();
    limpiarControles()
}


function AgregarProductoATabla(){
    var list = ObtenerProductos(),
    tbody = document.querySelector('#tabla1 tbody');
    tbody.innerHTML = ' ';

    for(var i = 0; i<list.length; i++){
        var row = tbody.insertRow(i);
        var idCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var PriceCell = row.insertCell(2);
        var ImgCell = row.insertCell(3);

        idCell.innerHTML = list[i].id;
        nameCell.innerHTML = list[i].nombre;
        PriceCell.innerHTML = list[i].precio;
        ImgCell.innerHTML = list[i].image;


        tbody.appendChild(row);
    }
}

function limpiarControles(){
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
}