/* Llamar modal  */
$('#btnModal').click( function () { $('#modalPalabra').modal('show'); });

/* Llamar a las funciones */
$('#btnProcesar').click( function () { procesarPalabra(); });
$('#btnLimpiar').click( function () { $('#txtPalabra').val(''); });

/* Funciones */
function procesarPalabra() {
    /* Validar que el campo de texto no este vacio */
    if ($('#txtPalabra').val() == '') {
        iziToast.error({
            title: 'Error',
            message: 'Ingrese un parrafo',
            position: 'topRight'
        });
    } else {
        /* Extraer el numero de palabras */
        var parrafo = $('#txtPalabra').val();
        var palabras = parrafo.split(' ');
        var contador = 0;
        for (var i = 0; i < palabras.length; i++) {
            if (palabras[i].length > 0) {
                contador++;
            }
        }
        /* Mensaje con izitoast */
        iziToast.info({ 
            title: 'Palabras',
            message: 'El parrafo tiene ' + contador + ' palabras',
            position: 'topRight'
        })
    }
}