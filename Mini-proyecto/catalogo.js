let vectorDondeSeGuardaElPedido = [];

function IniciarProductosAutomaticamente(){
    guardarDatosDelCarrito('001','Audifonos','200.00','0','images/audifonos.jpg');
    guardarDatosDelCarrito('002','Bocina','150.00','0','images/bocina.jpg');
    guardarDatosDelCarrito('003','Teclado','100.00','0','images/teclado.jpg');
    guardarDatosDelCarrito('004','Mouse','70.00','0','images/mouse.jpg');
    guardarDatosDelCarrito('005','Procesador','1700.00','0','images/procesador.jpg');
    guardarDatosDelCarrito('006','RAM','420.00','0','images/ram.jpg');
    guardarDatosDelCarrito('007','SSD','250.00','0','images/ssd.jpg');
    guardarDatosDelCarrito('008','Tarjeta de video','1800.00','0','images/Tarjetavideo.jpg');
    renderizarCarrito();
}

function finalizarPedido(){
    alert('El pedido se ha Enviado y Finalizado');
}

function guardarDatosDelCarrito(codigo, descripcion, precio, cantidad, imagen){
    vectorDondeSeGuardaElPedido.push(
        {
            codigo: codigo,descripcion: descripcion,precio: precio,cantidad: cantidad,imagen: imagen
        }
    );
}

var totalDelPedido=0;
function renderizarCarrito(){
    totalDelPedido=0;
    let salidaFinalDelCarrito = '';
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        salidaFinalDelCarrito +=
        `
        <tr>
        <td>${recorridoDelPedido.codigo}</td>
        <td>${recorridoDelPedido.descripcion}<img src="${recorridoDelPedido.imagen}" width="70"></td>

        
        <td><button onclick="quitarProductoDelPedido('${recorridoDelPedido.codigo}');
        "><i class="fa fa-trash-o" aria-hidden="true"></i></button> 
        <button onclick="restarCantidad('${recorridoDelPedido.codigo}');"> - </button> 
        <button onclick="sumarCantidad('${recorridoDelPedido.codigo}');"> + </button> 
        ${recorridoDelPedido.cantidad}</td>

        <td>${recorridoDelPedido.precio}</td>
        <td>${recorridoDelPedido.cantidad*recorridoDelPedido.precio}</td>
        </tr>
        `
        totalDelPedido+=recorridoDelPedido.cantidad*recorridoDelPedido.precio;
    }
    document.getElementById('detalleDelPedido').innerHTML = salidaFinalDelCarrito;
    document.getElementById('total').innerHTML = totalDelPedido;
}

function quitarProductoDelPedido(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}

var vectorUtilizadoTemporalmente=[]

function restarCantidad(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo==elCodigoDelProducto){
            var elCarritoTieneLaCantidadSiguiente=parseInt(recorridoDelPedido.cantidad);
            var laNuevaCantidadDelCarrito=elCarritoTieneLaCantidadSiguiente-1;
            if(elCarritoTieneLaCantidadSiguiente>1){
                vectorUtilizadoTemporalmente.push(
                    {
                        codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: laNuevaCantidadDelCarrito,imagen: recorridoDelPedido.imagen
                    }
                );
            }
            if(elCarritoTieneLaCantidadSiguiente<=1){
                alert("No se puede restar la cantidad por que tiene solo uno, utilize la opcion elminar.");
                vectorUtilizadoTemporalmente.push(
                    {
                        codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                    }
                );
            }
        }
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}

function sumarCantidad(elCodigoDelProducto){
    var vectorUtilizadoTemporalmente=[]
    for (recorridoDelPedido of vectorDondeSeGuardaElPedido) {
        if(recorridoDelPedido.codigo==elCodigoDelProducto){
            
            var elCarritoTieneLaCantidadSiguiente=parseInt(recorridoDelPedido.cantidad);
            var laNuevaCantidadDelCarrito=elCarritoTieneLaCantidadSiguiente+1;
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: laNuevaCantidadDelCarrito,imagen: recorridoDelPedido.imagen
                }
            );
        
        }
        if(recorridoDelPedido.codigo!=elCodigoDelProducto){
            vectorUtilizadoTemporalmente.push(
                {
                    codigo: recorridoDelPedido.codigo,descripcion: recorridoDelPedido.descripcion,precio: recorridoDelPedido.precio,cantidad: recorridoDelPedido.cantidad,imagen: recorridoDelPedido.imagen
                }
            );
        }
    }
    vectorDondeSeGuardaElPedido=[];
    vectorDondeSeGuardaElPedido=vectorUtilizadoTemporalmente;
    renderizarCarrito();
}