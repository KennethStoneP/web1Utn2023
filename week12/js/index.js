function validar(){

    var input=document.getElementById('nombre').value;


    if(input===""){
        alert('Falta el nombre');
        document.getElementById('nombre').focus();
  /*       document.write('Falta el nombre'); */
        return false;
    }

    var input=document.getElementById('apellido2').value;
    if(input===""){
        alert('Falta el apellido 2');
        document.getElementById('apellido2').focus();   /*el focus sirver para senalar lo faltante*/
  /*       document.write('Falta el nombre'); */
        return false;
    }

    var input=document.getElementById('apellido1').value;
    if(input===""){
        alert('Falta el apellido 1');
        document.getElementById('apellido1').focus();
  /*       document.write('Falta el nombre'); */
        return false;
    }
    var input=document.getElementById('edad').value;

    if(input===""){   /*isNaN is equals to the question, is it a number*/
        alert('El campo edad esta vacio');
        document.getElementById('edad').focus();
  /*       document.write('Falta el nombre'); */
        return false;
    }

    if(isNaN(input)){   /*isNaN is equals to the question, is it a number*/
        alert('Falta la edad o un valor numerico');
        document.getElementById('edad').focus();
        document.getElementById('edad').style.backgroundColor='red';
  /*       document.write('Falta el nombre'); */
        return false;
    }

    var input=document.getElementById('color').value;
    if(input==0){   /*isNaN is equals to the question, is it a number*/
    alert('Debe escoger un color favorito');
    document.getElementById('color').focus();
    document.getElementById('color').style.backgroundColor='red';

/*       document.write('Falta el nombre'); */
    return false;
}

input=document.getElementById('correo').value;
if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input)) ) {
    alert("No tiene formato de correo");
    document.getElementById("correo").focus();
    return false;
}
return true;

}
function mensaje(mensaje){
    alert(msj); 
}
function calcular(num1,num2){
    return num1+num2;
}

/* 
validar =>{
    alert('ff');
} */