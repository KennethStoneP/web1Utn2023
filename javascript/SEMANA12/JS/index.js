/*alert("ESTOY EN EL JS EXTERNO")*/

//var num=prompt('Digite un numero')
var num=5;
var nombre = "Kenneth"
let bandera=true; /*Palabra para crear variables */
console.log(num);
console.log(nombre);
console.log(bandera)

if(5>3){
    //let variables en su scope(ambiente)
    //var variables globales
    var edad=50;
    console.log(edad);
}
console.log(edad);

//TIPOS
//String
//Number
//Boolean
//Arrays
//Objectos

if(5=="5"){   //Coercion
    console.log("ENTROOOO...");  
}
//El triple (===) valida el tipo y la operacion

const persona={
    cedula:604820611,
    nombre:"Kenneth",
    apellido1: "Piedra",
    edad:50,
}

console.log(persona);
var tieneApellido=persona.hasOwnProperty("Apellido1"); //Para ver que tiene la propiedad.
console.log(tieneApellido);

console.log(persona.apellido1);

//-------------------VALIDACIÓN--------------------
if (persona.apellido1){

    console.log("Apellido 2 es:", persona.apellido1);

}else{
    console.log("No tiene apellido 2");

}
//-------------------------------------------------

//CONCATENAR +, STRINF TEMPLATE--------------------
const mensaje = `El mensaje es, el nombre de la persona es: ${nombre}, y la edad es: ${edad}`;
console.log(mensaje)

const lista=["rojo","azul","verde","amarillo"];

//spreed
//si pongo los 3 puntos no me imprime como si fuera una lista(...lista)
console.log(lista[0])

lista.forEach((value, index)=>{
    const mensaje=`El color es: ${value}, en la posicion: ${index}`
    console.log(mensaje)
}
);

lista.map((valor, indice)=>{
    if(valor=="rojo"){
        console.log("SI ES ROJO...")
    }else{
        console.log("ES OTRO COLOR,"+valor)
    }
})

const listaPersonas=[
    {
        cedula:904820611,
        nombre:"Leslie",
        apellido1: "Kardashian",
        edad:40,
    },
    {
        cedula:904820611,
        nombre:"taylor",
        apellido1: "st",
        edad:20,
    },
    {
        cedula:3,
        nombre:"lady",
        apellido1: "gaga",
        edad:38,
    },
    {
        cedula:4,
        nombre:"katy",
        apellido1: "perry",
        edad:5,
    },
    {
        cedula:5,
        nombre:"adele",
        apellido1: "adkins",
        edad:20,
    }

]
 const results = listaPersonas.map((persona, index)=>{
    const nombre = `${persona.nombre} ${persona.apellido1}`;
    return{
        id:index,
        cedula:persona.cedula,
        nombreCompleto:nombre,
        edad:persona.edad
    }


 }).filter(x=>x.edad>30);
 console.log(...results)

 for(var i=0; i<5; i++){
    console.log(i)
    i=i+1
 }

 function calcular(num1,num2){
    return num1+num2;
 }
 console.log(calcular(10,10))
 



