var estudiantes = [];
//var i = 0;
//for (var i = 0; i < estudiantes.length; i++) {
//  estudiantes[i];

function obtenerListaEstudiantes() {

return estudiantes;
console.log(estudiantes);
}

function agregarEstudiante() {
  var nomb,puntos_tecnico,puntos_HSE;
  var arr=[];

  nomb= prompt("INGRESE NOMBRE",'');
  puntos_tecnico= prompt("INGRESE SUS PUNTOS TECNICOS:",'');
  puntos_HSE= prompt("INGRESE SUS PUNTOS HSE:",'');
  nomb=nomb.toLowerCase();
  arr.push(nomb);
  arr.push(puntos_tecnico);
  arr.push(puntos_HSE);


        var texto={};

        for(var i=0;i<arr.length;i++)
          {
            texto[ "nombre"+(i+1)] = arr[i];

          }

   estudiantes.push(texto);

   console.log(estudiantes);
   var pri=estudiantes;

      //mostrar(estudiantes);
       return pri;
       //var estudiante =[
        //{nombre:prompt("NOMBRE"), puntos_tecnicos:prompt("PUNTOS TECNICOS"), puntos_HSE:prompt("PUNTOS HSE")},
       //]
       //nombre = nombre.toLowerCase();
       //return(estudiante);
}

 function mostrar(estudiante) {
     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
     var resultado = "";

     resultado += "<div class='row'>";
     resultado += "<div class='col m12'>";
     resultado += "<div class='card blue-grey darken-1'>";
     resultado += "<div class='card-content white-text'>";
     for(var i=estudiante.length-1; i<estudiante.length; i++)
       {

     resultado += "<p><strong>Nombre:</strong> " + estudiante[i].nombre1 + "</p>";
     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante[i].nombre2 + "</p>";
     resultado += "<p><strong>Puntos HSE:</strong> " + estudiante[i].nombre3 + "</p>";

        }
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";

     return resultado;
 }
 function mostrar1(estudiante) {
     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
     var resultado = "";

     resultado += "<div class='row'>";
     resultado += "<div class='col m12'>";
     resultado += "<div class='card blue-grey darken-1'>";
     resultado += "<div class='card-content white-text'>";
     for(var i=0; i<2; i++)
     {

     resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre1 + "</p>";
     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.nombre2 + "</p>";
     resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.nombre3 + "</p>";

      }
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";

     return resultado;
 }
 function mostrarLista(estudiantes) {
     // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
     // Retornar el template de todos los estudiantes

  console.log(estudiantes);

          var resultado = "";
          resultado += "<div class='row'>";
          resultado += "<div class='col m12'>";
          resultado += "<div class='card blue-grey darken-1'>";
          resultado += "<div class='card-content white-text'>";
          for(var i=0; i<estudiantes.length; i++)
          {
         resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre1 + "</p>";
          resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].nombre2 + "</p>";
          resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].nombre3 + "</p>";


        }

        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        return resultado;

 }

 function buscar(nombre, estudiantes) {
     // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
     // Retornar el objeto del estudiante buscado
     // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
     nombre=nombre.toLowerCase();
     var miu="";

     for(var i=0; i<=estudiantes.length; i++)
      {
     if( nombre == estudiantes[i].nombre1)
     {
       miu=estudiantes[i];
      //  res= estudiantes[i].nombre1 +" "+estudiantes[i].nombre2 +" "+estudiantes[i].nombre3;
       console.log("ho"+miu);

       return miu;
       var resultado = "";
       resultado += "<div class='row'>";
       resultado += "<div class='col m12'>";
       resultado += "<div class='card blue-grey darken-1'>";
       resultado += "<div class='card-content white-text'>";

      resultado += "<p><strong>Nombre:</strong> " + miu.nombre1 + "</p>";
       resultado += "<p><strong>Puntos Técnicos:</strong> " + miu.nombre2 + "</p>";
       resultado += "<p><strong>Puntos HSE:</strong> " + miu.nombre3 + "</p>";

     }

     resultado += "</div>";
     resultado += "</div>";
     resultado += "</div>";
     resultado += "</div>";
     return resultado;


     }

      }



 function topTecnico(estudiantes) {
     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

     var miu = [];

    var newYu=[];
    for(var i=0; i< estudiantes.length; i++)
    {
       // ordenando primero los valores tecnicos y agregando en un arreglo
       newYu[i] = estudiantes[i].nombre2;
           //document.write(estudiantes[i].nombre1 +" "+estudiantes[i].nombre2 +" "+estudiantes[i].nombre3 +" ");

    }
     newEs.sort();
     var x= 0;
     for(var i=newEs.length-1; i >= 0; i--)
     {
       if(newYu[i] === estudiantes[i].nombre2){ // si estan existe
         // mostrar los datos
         miu[x]= estudiantes[i];
         //res= estudiantes[i].nombre1 +" "+estudiantes[i].nombre2 +" "+estudiantes[i].nombre3;
       }
       x++;
     }


    return miu;

 }
//
function topHSE(estudiantes) {
     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

     var miu = [];
    var newYu=[];
    for(var i=0; i< estudiantes.length; i++)
    {
       // ordenando primero los valores tecnicos y agregando en un arreglo
       newYu[i] = estudiantes[i].nombre3;

    }
     estudiantes.sort(function(p,s){
       return s.nombre3-p.nombre3;
       console.log("kjvk"+s.nombre3-p.nombre3);
     });


 }
