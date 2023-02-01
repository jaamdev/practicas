var cuerpo = document.getElementById('body');
function palindromo(texto){
    texto = texto.toLowerCase();
    let revert = texto.split('').reverse().join('');
    var respuesta = '';
    if(revert === texto){
        respuesta = 'Sí';
    }else{
        respuesta = 'No';
    }
    return respuesta;
}
texto = prompt('Introduce un palindromo');
cuerpo.innerHTML = `<h1>¿${texto} es un palindromo? ${palindromo(texto)}</h1>`;