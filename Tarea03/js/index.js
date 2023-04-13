function parImpar() {
    var numero = parseInt(document.getElementById("numero1").value);
    if (numero==="" || /[a-zA-Z]/.test(numero)){
        alert(`Porfavor, completa el formulario sin caracteres alfabetico o especiales`);

    }
    else if (numero % 2 == 0) {
        alert(`El numero ${numero} es un numero par`);
    } else {
        alert(`El numero ${numero} es un numero impar`);
    }
}

function tipoPalabra() {
    var word = (document.getElementById("palabra").value);

    if (/\d/.test(word)) {
        alert(`No se aceptan caracteres numericos`);
    }
    else if(/[A-Z]/.test(word)&&/[a-z]/.test(word)){
        alert(`La palabra ${word} esta compuesta con mayusculas y minusculas`);
    }
    else if (/[A-Z]/.test(word)) {
        alert(`La palabra ${word} esta escrita en mayuscula`);
    } 
   else if (/[a-z]/.test(word)) {
        alert(`La palabra ${word} esta escrita en minuscula`);
    }

}

function palabraPalindrome() {
    var palindrome = (document.getElementById("palindrome").value);
    palindrome1 = palindrome.toLowerCase().replace(/\s/g, '');

    var palabraInvertida = '';
    for (var i = palindrome1.length - 1; i >= 0; i--) {
      palabraInvertida += palindrome1[i];
    }
    if (/\d/.test(palindrome1) || palindrome1 === "" || /[^a-zA-Z0-9 ]/.test(palindrome1)) {
        alert(`Complete el formulario con una palabra o frase. No utilize caracteres de tipo numericos ni especiaes especiales`);
    }
    else if(palindrome1 === palabraInvertida){
        alert(`La palabra ${palindrome1} es palindrome`);
    }else if (palindrome1 !== palabraInvertida){
        alert(`La palabra ${palindrome1} no es palindrome`);
}
}
 
  
  
  
