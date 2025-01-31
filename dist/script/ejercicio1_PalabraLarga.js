/* Llamar al modal */
$('#btnModal').click( function () {
    $('#modalPalabra').modal('show');
});


/* Llamar a las funciones */
$('#btnProcesar').click( function () { procesarPalabra(); });
$('#btnLimpiar').click( function () { $('#txtPalabra').val(''); });

/* Funciones */
function procesarPalabra() {
    /* Palabra más larga extraida de un párrafo con izitoast*//* Validar que el campo de texto no este vacio */
    if ($('#txtPalabra').val() == '') {
        iziToast.error({
            title: 'Error',
            message: 'Ingrese un parrafo',
            position: 'topRight'
        });
    } else {
        /* Extraer la palabra mas larga */
        var parrafo = $('#txtPalabra').val();
        var palabras = parrafo.split(' ');
        var palabraMasLarga = '';
        var longitudPalabraMasLarga = 0;
        for (var i = 0; i < palabras.length; i++) {
            if (palabras[i].length > longitudPalabraMasLarga) {
                longitudPalabraMasLarga = palabras[i].length;
                palabraMasLarga = palabras[i];
            }
        }
        iziToast.info({
            title: 'Palabra mas larga',
            message: 'La palabra mas larga del parrafo es: ' + palabraMasLarga,
            position: 'topRight'
        })
    }
}