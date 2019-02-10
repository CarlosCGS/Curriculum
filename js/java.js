firebase.initializeApp({
 apiKey: "AIzaSyCXvymqQBirlYb7eqEbc7op3Q_7caGYqB8",
    authDomain: "integracion-d07a3.firebaseapp.com",
    projectId: "integracion-d07a3"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function Guardar(){
// Add a new document in collection "cities"
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

db.collection("curriculum").doc("Educacion").set({
    Educacion_primaria:"Sor Juana Ines de la Cruz del 2003-2009",
    Educacion_Secundaria:"Quirino Mendoza Cortez del 2009-2011",
    Educacion_bachillerato:"\"Cetis 39\" del 2011-2014",
    Educación_Universitaria:  "Tecnologico de tlahuac 2  del 2014-actual"
    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

}

  var datosP=document.getElementById('datos-personales'); 
  var NombreS=document.getElementById('Nombre'); 

 var docRef= db.doc('curriculum/Datos personales');

 docRef.onSnapshot(function(doc){
    if (doc && doc.exists) {

        const myData=doc.data();

        NombreS.innerHTML=myData.Nombre;
        

                           datosP.innerHTML= `<p >
                            <ion-icon name='school'>
                            </ion-icon>
                            `+myData.Ocupacion+`
                        </p>
                        <p>
                            <ion-icon name='pin'>
                            </ion-icon>
                            `+myData.Dirección+`
                        </p>
                        <p>
                            <ion-icon name='mail'>
                            </ion-icon>
                            `+myData.Correo_electronico+`
                        </p>
                        <p>
                            <ion-icon name='call'>
                            </ion-icon>
                            `+myData.Numero+`
                        </p>
                        <a href='https://api.whatsapp.com/send?phone=525561382331&text=Hola,%20te%20escribo%20para%20contactarme%20contigo' style='color: #28B463;'>
                            <p>
                                <ion-icon name='logo-whatsapp'>
                                </ion-icon>
                                Enviar mensaje por whatsapp
                            </p>
                        </a>`;




    }
 })


var Edus=document.getElementById('Educacion2'); 
db.collection("/Educacion").onSnapshot((querySnapshot) => {
            Edus.innerHTML=" ";
    querySnapshot.forEach((doc) => {
        Edus.innerHTML +=`
        <br><br> <div class='col-lg-4 col-md-6'>
                                    <!--Card-->
                                    <div class='card card-cascade wider mb-4 zoom'>
                                        <!-- Card image -->
                                        <div class='view view-cascade gradient-card-header aqua-gradient'>
                                            <!-- Title -->
                                            <p>
                                                Estudios basicos en `+doc.data().Nivel+`:
                                            </p>
                                            <h4> `+doc.data().Nombre+`</h4>

                                            <div>  
                                            <p class="float-left"> `+doc.data().Direccion+`</p>
                                            <h5 class="float-right"><span class="badge badge-pill badge-light"> `+doc.data().Fechas+`</span></h5>
                                            </div>
                                            <!-- Text -->
                                        </div>
                                        <!--Card content-->
                                        <div class='card-body card-body-cascade text-center'>
                                            <!--Title-->
                                            <p class='card-text'>
                                                 `+doc.data().Anecdota+`
                                            </p>
                                            
                                        </div>
                                        <!--/.Card content-->
                                    </div>
                                    <!--/.Card-->
                                </div>`;

    });
}); 


var ex=document.getElementById('Experiencia'); 
db.collection("/ExperienciaProfesional").onSnapshot((querySnapshot) => {
            ex.innerHTML=" ";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        ex.innerHTML +=`<div class="col-lg-4 col-md-12 mb-4">
                                    <!-- Card -->
                                    <div class="card card-image zoom example hoverable" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg);">
                                        <!-- Content -->
                                        <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                            <div>
                                               
                                                <h3 class="card-title pt-2">
                                                    <strong>
                                                        `+doc.data().Nombre+`
                                                    </strong>

                                                </h3>
                                                <h5 class="float-left"><span class="badge badge-pill badge-light">Estatus: `+doc.data().Estatus+`</span></h5>
                                                <br><br>
                                                <p>
                                                    `+doc.data().Actividad+`
                                                </p>
                                                <a class="btn btn-pink">
                                                    <ion-icon name="calendar"></ion-icon>
                                                   `+doc.data().Fechas+`
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card -->
                                </div>`;
    });
}); 



var pro=document.getElementById('Conocimientos'); 
db.collection("/Conocimientos").onSnapshot((querySnapshot) => {
            pro.innerHTML=" ";
    querySnapshot.forEach((doc) => {
        pro.innerHTML +=`
        <div class="col-lg-4 col-md-12 "><br> 
                                    <!-- Card Wider -->
                                    <div class="card card-cascade wider">
                                        <!-- Card image -->
                                        <div class="view view-cascade overlay ">
                                            <img alt="Card image cap" class="card-img-top" src="`+doc.data().url+`">
                                                <a href="#!">
                                                    <div class="mask rgba-white-slight">
                                                    </div>
                                                </a>
                                            </img>
                                        </div>
                                        <!-- Card content -->
                                        <div class="card-body card-body-cascade text-center zoom example hoverable ">
                                            <!-- Title -->
                                            <h4 class="card-title">
                                                <strong>
                                                    `+doc.data().Nombre+`
                                                </strong>
                                            </h4>
                                            <!-- Subtitle -->
                                            <h5 class="blue-text pb-2">
                                                <strong>
                                                    `+doc.data().Lugar+`
                                                </strong>
                                            </h5>
                                            <!-- Text -->
                                            <p class="card-text">
                                                `+doc.data().Anecdota+`
                                            </p>
                                          <a href="https://telmexhub.org/" target="_blank" class="btn btn-outline-default btn-rounded waves-effect" role="button">Ir al sitio</a>
                                        </div>
                                    </div>
                                    <!-- Grid column -->
                                </div>
                                <br> <br><br><br><br><br>
`;

    });
}); 

var tec=document.getElementById('Tec'); 
db.collection("/Proyectos").onSnapshot((querySnapshot) => {
            tec.innerHTML=" ";
    querySnapshot.forEach((doc) => {
        tec.innerHTML +=`<div class="col-lg-4 col-md-12 ">
                                    <!-- Card -->
                                    <div class="card card-cascade wider reverse">
                                        <!-- Card image -->
                                        <div class="view view-cascade overlay">
                                            <img alt="Card image cap" class="card-img-top" src="`+doc.data().url+`">
                                               
                                                <a href="#!">
                                                    <div class="mask rgba-white-slight">
                                                    </div>
                                                </a>
                                            </img>
                                        </div>
                                        <!-- Card content -->
                                        <div class="card-body card-body-cascade text-center">
                                            <!-- Title -->
                                            <h4 class="card-title">
                                                <strong>
                                                    `+doc.data().Nombre+`
                                                </strong>
                                            </h4>
                                            <!-- Subtitle -->
                                            <h6 class="font-weight-bold indigo-text py-2">
                                                 `+doc.data().Lugar+`
                                            </h6>
                                             <h5 class="float-left"><span class="badge badge-pill badge-default"> `+doc.id+`</span></h5>
                                             <br>
                                            <!-- Text -->
                                            <p class="card-text">
                                                 `+doc.data().Descripcion+`
                                            </p>                                            
                                         <button type="button" class="btn btn-outline-default btn-rounded waves-effect">Ir al sitio</button>
                                    </div>
                                    <!-- Card -->
                                    <div>
                                    </div>
                                </div>
`;

    });
}); 