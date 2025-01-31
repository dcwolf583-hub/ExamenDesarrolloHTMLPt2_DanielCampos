/* Llamar modal  */
$('#btnModal').click( function () { $('#modalPalabra').modal('show'); });

/* Llamar a las funciones */
$('#btnProcesar').click( function () { numeroVocales(); });
$('#btnLimpiar').click( function () { 
    $('#txtPalabra').val(''); 
    $('#txtA').val('');
    $('#txtE').val('');
    $('#txtI').val('');
    $('#txtO').val('');
    $('#txtU').val('');
    $('#txtTotal').val('');
});

/* Funciones */
function numeroVocales(){
    /* Validar si está vacío */
    if ($('#txtPalabra').val() == '') {
        iziToast.error({
            title: 'Error',
            message: 'Ingrese una palabra',
            position: 'topRight'
        });
    } else {
        /* Extraer el numero de vocales */
        var palabra = $('#txtPalabra').val().split('');
        var vocales = 0;
        var a = 0, e = 0, i = 0, o = 0, u = 0;
        for (var ii = 0; ii < palabra.length; ii++) {
            if (palabra[ii].toUpperCase() == 'A') { a++; }
            if (palabra[ii].toUpperCase() == 'E') { e++; }
            if (palabra[ii].toUpperCase() == 'I') { i++; }
            if (palabra[ii].toUpperCase() == 'O') { o++; }
            if (palabra[ii].toUpperCase() == 'U') { u++; }
        }
        vocales = a + e + i + o + u;

        if(vocales <= 0){
            /* Mensaje con izitoast */
            iziToast.warning({
                title: 'Oops',
                message: 'La palabra NO contiene vocales.',
                position: 'topRight'
            });
        } else{
            /* Mensaje con izitoast */
            iziToast.info({
                title: 'Vocales',
                message: 'La palabra tiene ' + vocales + ' vocales',
                position: 'topRight'
            });

            /* Imprimir en los inputs */
            $('#txtA').val(a);
            $('#txtE').val(e);
            $('#txtI').val(i);
            $('#txtO').val(o);
            $('#txtU').val(u);
            $('#txtTotal').val(vocales);
        }

    }
}