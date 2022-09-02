let productos = [];

function AgregarProducto(id, nombre, precio, imagen){

    let newProduct = {
        id: id,
        nombre: nombre,
        precio: precio,
        imagen: imagen
    };
    productos.push(newProduct);
    LocalStorageProduct(productos);
}
function ObtenerProductos(){
    var StorageList = localStorage.getItem('LocalProductList');
    if(StorageList == null){
        productos = [];
    }
    else{
        productos = JSON.parse(StorageList);
    }

return productos;
}

function LocalStorageProduct(Plist){
    localStorage.setItem('LocalProductList', JSON.stringify(Plist));
}
