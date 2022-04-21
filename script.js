//texto digitado
var txtNormal = document.getElementById('textoNormal')
//texto saida
var txtCripto = document.getElementById('textoCripto')
//botao cripto
var btnC = document.getElementById('criptobtn')
// botao descripto
var btnD = document.getElementById('descriptobtn')

var btnCopy = document.getElementById('copy')

textoNormal.focus()

function criptografar(){
    var texto = textoNormal.value; 
    var resultado = texto.replace(/e/g,'enter')
    var resultado1 = resultado.replace(/i/g, 'imes')
    var resultado2 = resultado1.replace(/a/g, 'ai')
    var resultado3 = resultado2.replace(/u/g, 'ufat')
    var resultado4 = resultado3.replace(/o/g, 'ober')
    
    textoCripto.value = resultado4;
}
 function descriptografar(){
     var texto = textoNormal.value;
     var resultado = texto.replace(/enter/g, 'e')
     var resultado1 = resultado.replace(/imes/g, 'i')
     var resultado2 = resultado1.replace(/ai/g, 'a')
     var resultado3 = resultado2.replace(/ufat/g, 'u')
     var resultado4 = resultado3.replace(/ober/g, 'o')

     textoCripto.value = resultado4;
 }

 function copy (){
     var copy = textoNormal.value;
     navigator.clipboard.writeText(copy);
 }

btnCopy.onclick = copy;

btnC.onclick = criptografar;

btnD.onclick = descriptografar;


