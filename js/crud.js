firebase.initializeApp({
 apiKey: "AIzaSyCXvymqQBirlYb7eqEbc7op3Q_7caGYqB8",
    authDomain: "integracion-d07a3.firebaseapp.com",
    projectId: "integracion-d07a3"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function Editar() {
document.getElementById("editar").classList.add('visible');
document.getElementById("guardar").classList.remove('invisible');
  var datosP=document.getElementById('datos-personales'); 
  var NombreS=document.getElementById('Nombre'); 

 var docRef= db.doc('curriculum/Datos personales');

 docRef.onSnapshot(function(doc){
    if (doc && doc.exists) {

        const myData=doc.data();

        NombreS.innerHTML=`<div class="md-form form-sm">
                             <input class="form-control " id="DPNombre"  value="`+myData.Nombre+`" type="text" placeholder="" required></input>
                             </div>`;
        

                           datosP.innerHTML= `<p >
                           
                            <div class="md-form form-sm">
                             <input class="form-control " id="DPOcupacion" value="`+myData.Ocupacion+`" type="text" placeholder="" required></input>
                             </div>
                        </p>
                        <p>
                            
                            <div class="md-form form-sm">
                             <input class="form-control " id="DPDireccion"  value="`+myData.Dirección+`" type="text" placeholder="" required></input>
                             </div>
                        </p>
                        <p>
                            
                            <div class="md-form">
                             <input class="form-control " id="DPCorreo_electronico"  value="`+myData.Correo_electronico+`" type="text" placeholder="" required></input>
                             </div>
                            
                        </p>
                        <p>
                           
                            <div class="md-form">
                             <input class="form-control " id="DPNumero" name="moduloAConvalidar" value="`+myData.Numero+`" type="text" placeholder="" required></input>
                             </div>
                            
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

                                                Estudios basicos en :
                                                <div class="md-form form-sm">
                                                <input class="form-control text-light" id="EDNivel" name="moduloAConvalidar" value="`+doc.data().Nivel+`" type="text" placeholder="" required></input>
                                                </div>
                                            </p>
                                            <h4> <div class="md-form form-sm">
                                                <input class="form-control text-light" id="EDNombre" name="moduloAConvalidar" value="`+doc.data().Nombre+`" type="text" placeholder="" required></input>
                                                </div>

                                            </h4>

                                            <div>  
                                            <p class="float-left"> 
                                                <div class="md-form form-sm">
                                                <input class="form-control text-light" id="EDDireccion" name="moduloAConvalidar" value="`+doc.data().Direccion+`" type="text" placeholder="" required></input>
                                                </div>

                                            </p>
                                            <div class="md-form form-sm">
                                                <input class="form-control text-light" id="EDFechas" name="moduloAConvalidar" value="`+doc.data().Fechas+`" type="text" placeholder="" required></input>
                                                </div>
                                            <h5 class="float-right"><span class="badge badge-pill badge-light"> </span></h5>
                                            </div>
                                            <!-- Text -->
                                        </div>
                                        <!--Card content-->
                                        <div class='card-body card-body-cascade text-center'>
                                            <!--Title-->
                                            <p class='card-text'>

                                            <div class="md-form">
                                                       <textarea id="textarea-char-counter" class="form-control md-textarea " length="300" rows="6">`+doc.data().Anecdota+`</textarea>
                                                       <label for="textarea-char-counter"></label>
                                                     </div>
                                            
                                                 
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

                                                    <!-- Medium input -->
                                                      <div class="md-form">
                                                     <input class="form-control text-light" id="EXNombre" name="moduloAConvalidar" value="`+doc.data().Nombre+`" type="text" placeholder="" required></input>
                                                    </div>
                                                    </strong>

                                                </h3>Estatus:
                                                <div class="md-form">
                                                     <input class="form-control text-light" id="EXEstatus" name="moduloAConvalidar" value="`+doc.data().Estatus+`" type="text" placeholder="" required></input>
                                                    </div>
                                                <br><br>
                                                <p>
                                                
                                                    <div class="md-form">
                                                       <textarea id="textarea-char-counter" class="form-control md-textarea text-light" length="200" rows="5">`+doc.data().Actividad+`</textarea>
                                                       <label for="textarea-char-counter"></label>
                                                     </div>
                                                </p>
                                                <a class="btn btn-pink">
                                                    <ion-icon name="calendar"></ion-icon>
                                                    <div class="md-form">
                                                     <input class="form-control text-light" id="EXFechas" name="moduloAConvalidar" value="`+doc.data().Fechas+`" type="text" placeholder="" required></input>
                                                    </div>                                                  
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
                                                <div class="md-form form-sm">
                                                <input class="form-control" id="CONombre" name="moduloAConvalidar" value="`+doc.data().Nombre+`" type="text" placeholder="" required></input>
                                                </div>
                                                    
                                                </strong>
                                            </h4>
                                            <!-- Subtitle -->
                                            <h5 class="blue-text pb-2">
                                                <strong>
                                                <div class="md-form form-sm">
                                                <input class="form-control" id="COLugar" name="moduloAConvalidar" value="`+doc.data().Lugar+`" type="text" placeholder="" required></input>
                                                </div>
                                                    
                                                </strong>
                                            </h5>
                                            <!-- Text -->
                                            <p class="card-text">
                                            <div class="md-form">
                                                       <textarea id="textarea-char-counter" class="form-control md-textarea" length="200" rows="5">`+doc.data().Anecdota+`</textarea>
                                                       <label for="textarea-char-counter"></label>
                                                     </div>
                                                
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
                                                <div class="md-form form-sm">
                                                <input class="form-control" id="PRNombre" name="moduloAConvalidar" value="`+doc.data().Nombre+`" type="text" placeholder="" required></input>
                                                </div>
                                                    
                                                </strong>
                                            </h4>
                                            <!-- Subtitle -->
                                            <h6 class="font-weight-bold indigo-text py-2">
                                            <div class="md-form form-sm">
                                                <input class="form-control" id="PRLugar" name="moduloAConvalidar" value="`+doc.data().Lugar+`" type="text" placeholder="" required></input>
                                                </div>
                                                 
                                            </h6>
                                             <div class="md-form form-sm">
                                                <input class="form-control" id="PRid" name="moduloAConvalidar" value="`+doc.id+`" type="text" placeholder="" required></input>
                                                </div></span>
                                             <br>
                                            <!-- Text -->
                                            <p class="card-text">
                                            <div class="md-form">
                                                       <textarea id="textarea-char-counter" class="form-control md-textarea" length="200" rows="5">`+doc.data().Descripcion+`</textarea>
                                                       <label for="textarea-char-counter"></label>
                                                     </div>
                                                 
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


}

function guardar() {

document.getElementById("editar").classList.add('invisible');
document.getElementById("guardar").classList.remove('visible');

     db.doc('curriculum/Datos personales').set({
    Nombre:document.getElementById("DPNombre").value,
    Ocupacion:document.getElementById("DPOcupacion").value,
    Dirección:document.getElementById("DPDireccion").value,
    Correo_electronico:document.getElementById("DPCorreo_electronico").value,
    Numero:document.getElementById("DPNumero").value
    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

    db.doc("/Educacion/EducacionPreparatoria").set({
    Nombre:document.getElementById("EDNombre").value,
    Nivel:document.getElementById("EDNivel").value,
    Direccion:document.getElementById("EDDireccion").value,
    Fechas:document.getElementById("EDFechas").value,
    Anecdota:document.getElementById("textarea-char-counter").value
    
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});


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
}


/*
function guardar(){
// Add a new document in collection "cities"
db.collection("ExperienciaProfesional").set({
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
*/

