firebase.initializeApp({
 apiKey: "AIzaSyCXvymqQBirlYb7eqEbc7op3Q_7caGYqB8",
    authDomain: "integracion-d07a3.firebaseapp.com",
    projectId: "integracion-d07a3"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function Guardar(){
// Add a new document in collection "cities"
var nombre=document.getElementById('modulo-a-convalidar').value;
db.collection("curriculum").doc("Datos personales").set({
    Nombre:"Carlos Garcia Santiago",
    Ocupacion:"Estudiante de Ingenieria en Tecnologias de la informacion y comunicación",
    Correo_electronico: "carlosgaziee@gmail.com",
    Numero:  " 55-61-38-23-31",
    Dirección: " El rosario #28. cp:13540, El rosario, San juan Ixtayopan Tlahuac, CDMX."
    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});



db.collection("curriculum").doc("Educacion Primaria").set({
    NombreEscuela:"Sor Juana Ines de la Cruz ",
    Fechas:"2003-2009",
    Dirección: "Benito Juárez 19, El Rosario, 13540 San Juan Ixtayopan, CDMX",
    Anecdota:"La experiencia en esta escuela fue la primera de muchas en donde conoci amigos y personas que me enseñaron a saber lo que queria cuando fuera grande, y les agradezco el apoyo a todos"
    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


db.collection("curriculum").doc("Educacion Secundaria").set({
    NombreEscuela:"Quirino Mendoza Cortez ",
    Fechas:"2009-2011",
    Dirección: "Francisco Matias Tapia S/N, San Sebastián, 16730 Xochimilco, CDMX",
    Anecdota:"La experiencia en esta escuela es que conoci a uno  de mis mejores amigos y en donde aprendi las bases de las asignaturas que mas adelante me ayudarian en mi carrera"
    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});




}

