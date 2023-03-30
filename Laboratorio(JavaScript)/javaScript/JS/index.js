var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
        console.log("QUACK!!!");
    }
};
var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
        console.log("Estoy encantado de conocerle.");
    }
};
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
        console.log("Hi there!");
    }
};

//--------------------------------------------------------------------
//I. Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden
//asignar valores de variables y no quemar valores dentro del arreglo. 
const penguinsList = [gunter, ramon, fred];
//--------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------
//Escriba un ciclo for para iterar a través de cada pingüino en la matriz e
//imprima el valor de la propiedad del nombre de cada pingüino en la
//consola.
console.log("\n-----------------------Section II-----------------------\n\n")
for (var i = 0; i < penguinsList.length; i++) {
    console.log(`The penguin's name number ${i}: "${penguinsList[i].name}" `);
}
console.log("-------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------
//Imprima la longitud de la matriz de pingüinos en la consola. 
console.log("\n-----------------------Section II-----------------------\n\n")
console.log(`The lenght of the array is equals to "${penguinsList.length}"`);
console.log("-------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------
//Escriba un ciclo for para iterar a través de cada pingüino en la matriz y
//agregue una nueva propiedad a cada pingüino llamada numberOfFeet con
//un valor aleatorio del 1 al 5.
for (var i = 0; i < penguinsList.length; i++) {
    penguinsList[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
}

/*function randomNumber(max){
 return Math.floor(Math.random()*5);
}
for (var i=0; i<penguinsList.length;i++){
 penguinsList[i].numberOfFeet = randomNumber(5+1);
}*/


//--------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------
// Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y
//para cada pingüino que pueda volar, imprima en la consola un mensaje que
//contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter
//puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos
//que no pueden volar).
console.log("\n-----------------------Section V-----------------------\n\n")
for (var i = 0; i < penguinsList.length; i++) {
    if (penguinsList[i].canFly) {
        console.log(`¡${penguinsList[i].name} puede volar!`);
    }
}
console.log("-------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------
//VI. Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies. 
var penguinsFeet = []  //Makin'the array where im gonna save the penguins who has more than 2 feet
for (var i = 0; i < penguinsList.length; i++) {
    if (penguinsList[i].numberOfFeet > 2) {
        penguinsFeet.push(penguinsList[i]); //The push function is the one in charge to add elements to an array method
    }
}

if (penguinsFeet.length !== 0) {
    console.log("\n-----------------------Section VI-----------------------\n\n")

    console.log("----------- Penguis who has more than 2 feet -----------")
    for (var i = 0; i < penguinsFeet.length; i++) {
        console.log(`The penguin's name is ${penguinsFeet[i].name} and it has ${penguinsFeet[i].numberOfFeet} feet`)
    }
    console.log("-------------------------------------------------------")


}
//--------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------
//Agregue una nueva propiedad a su pingüino llamada favoriteFoods y
//configúrela igual a una matriz que contiene una lista de tres cadenas. 


gunter.favoriteFoods = ["fish", "krill", "squid"];
ramon.favoriteFoods = ["shrimp", "squid", "fish"];
fred.favoriteFoods = ["bread", "lettuce", "crackers"];

//--------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------

//Accede a la segunda comida favorita de sus pingüinos e imprímela en la
//consola usando console.log () 
console.log("\n-----------------------Section IX-----------------------\n\n")

for (var i = 0; i < penguinsList.length; i++) {
    console.log(`Penguin ${penguinsList[i].name}'s second favorite food is ${penguinsList[i].favoriteFoods[1]}`)
}
console.log("-------------------------------------------------------")

//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------
//Sin modificar nada de su código anterior, escriba una nueva línea de código
//que cambie el valor del último elemento de la lista a "piñas"
//(sobrescribiendo el valor anterior). 

for (var i = 0; i < penguinsList.length; i++) {
    penguinsList[i].favoriteFoods[2] = "Piñas";
}
//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------
//Escriba un cilo for para recorrer cada comida en la propiedad de comida
//favorita de sus pingüinos e imprima cada una en la consola. 

console.log("\n-----------------------Section X-----------------------\n\n")

for (var i = 0; i < penguinsList.length; i++) {
    console.log(`${penguinsList[i].name}'s favorite are: `)
    for (var j = 0; j < 3; j++) {
        console.log(`${j + 1}: ${penguinsList[i].favoriteFoods[j]}`)
    }
    console.log("-------------------------------------------------------")

}
  //--------------------------------------------------------------------------------------------------------------------------------------












