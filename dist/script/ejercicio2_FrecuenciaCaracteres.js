/* Modal */
$('#btnModal').click( function () { $('#modalPalabra').modal('show'); });

/* Llamar a las funciones */
$('#btnLimpiar').click( function () { 
    $('#txtPalabra').val(''); 
    $('#contenedor').html('');
}); 

$('#btnProcesar').click( function () { frecuenciaCaracteres(); });

/* Sacar la frecuencia de caracteres, qué letras se repite más y cuantas veces */
function frecuenciaCaracteres() {

    /* Validar que el campo de texto no este vacio */
    if ($('#txtPalabra').val() == '') {
        iziToast.error({
            title: 'Error',
            message: 'Ingrese un parrafo',
            position: 'topRight'
        });
    }  {
        var parrafo = $('#txtPalabra').val();
        var letras = parrafo.split('');
        var contenedor = $('#contenedor');
        var a = 0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0, k=0, l=0, m=0, n=0, o=0, p=0, q=0, r=0, s=0, t=0, u=0, v=0, w=0, x=0, y=0, z=0;
        for (var ii = 0; ii < letras.length; ii++) { 
            if (letras[ii].toLowerCase() == 'a') { a++; }
            if (letras[ii].toLowerCase() == 'b') { b++; }
            if (letras[ii].toLowerCase() == 'c') { c++; }
            if (letras[ii].toLowerCase() == 'd') { d++; }
            if (letras[ii].toLowerCase() == 'e') { e++; }
            if (letras[ii].toLowerCase() == 'f') { f++; }
            if (letras[ii].toLowerCase() == 'g') { g++; }
            if (letras[ii].toLowerCase() == 'h') { h++; }
            if (letras[ii].toLowerCase() == 'i') { i++; }
            if (letras[ii].toLowerCase() == 'j') { j++; }
            if (letras[ii].toLowerCase() == 'k') { k++; }
            if (letras[ii].toLowerCase() == 'l') { l++; }
            if (letras[ii].toLowerCase() == 'm') { m++; }
            if (letras[ii].toLowerCase() == 'n') { n++; }
            if (letras[ii].toLowerCase() == 'o') { o++; }
            if (letras[ii].toLowerCase() == 'p') { p++; }
            if (letras[ii].toLowerCase() == 'q') { q++; }
            if (letras[ii].toLowerCase() == 'r') { r++; }
            if (letras[ii].toLowerCase() == 's') { s++; }
            if (letras[ii].toLowerCase() == 't') { t++; }
            if (letras[ii].toLowerCase() == 'u') { u++; }
            if (letras[ii].toLowerCase() == 'v') { v++; }
            if (letras[ii].toLowerCase() == 'w') { w++; }
            if (letras[ii].toLowerCase() == 'x') { x++; }
            if (letras[ii].toLowerCase() == 'y') { y++; }
            if (letras[ii].toLowerCase() == 'z') { z++; }
        }
        
        /* Imprimir las letras en pantalla, validando qué aparezcan */
        if (a > 0) { contenedor.append('<p>A: ' + a + '</p>'); }
         if (b > 0) { contenedor.append('<p>B: ' + b + '</p>'); }
         if (c > 0) { contenedor.append('<p>C: ' + c + '</p>'); }
         if (d > 0) { contenedor.append('<p>D: ' + d + '</p>'); }
         if (e > 0) { contenedor.append('<p>E: ' + e + '</p>'); }
         if (f > 0) { contenedor.append('<p>F: ' + f + '</p>'); }
         if (g > 0) { contenedor.append('<p>G: ' + g + '</p>'); }
         if (h > 0) { contenedor.append('<p>H: ' + h + '</p>'); }
         if (i > 0) { contenedor.append('<p>I: ' + i + '</p>'); }
         if (j > 0) { contenedor.append('<p>J: ' + j + '</p>'); }
         if (k > 0) { contenedor.append('<p>K: ' + k + '</p>'); }
         if (l > 0) { contenedor.append('<p>L: ' + l + '</p>'); }
         if (m > 0) { contenedor.append('<p>M: ' + m + '</p>'); }
         if (n > 0) { contenedor.append('<p>N: ' + n + '</p>'); }
         if (o > 0) { contenedor.append('<p>O: ' + o + '</p>'); }
         if (p > 0) { contenedor.append('<p>P: ' + p + '</p>'); }
         if (q > 0) { contenedor.append('<p>Q: ' + q + '</p>'); }
         if (r > 0) { contenedor.append('<p>R: ' + r + '</p>'); }
         if (s > 0) { contenedor.append('<p>S: ' + s + '</p>'); }
         if (t > 0) { contenedor.append('<p>T: ' + t + '</p>'); }
         if (u > 0) { contenedor.append('<p>U: ' + u + '</p>'); }
         if (v > 0) { contenedor.append('<p>V: ' + v + '</p>'); }
         if (w > 0) { contenedor.append('<p>W: ' + w + '</p>'); }
         if (x > 0) { contenedor.append('<p>X: ' + x + '</p>'); }
         if (y > 0) { contenedor.append('<p>Y: ' + y + '</p>'); }
         if (z > 0) { contenedor.append('<p>Z: ' + z + '</p>'); }
    }

}

