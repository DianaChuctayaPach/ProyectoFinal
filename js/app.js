var estudiantes = [];
var i = 0;
for (var i = 0; i < estudiantes.length; i++) {
  estudiantes[i];
}
function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    var a = "";

    //return(a);
}

function agregarEstudiante() {
   var estudiante =[
    {nombre:prompt("NOMBRE"), puntos_tecnicos:prompt("PUNTOS TECNICOS"), puntos_HSE:prompt("PUNTOS HSE")},
   ]
   return(estudiante);
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
var ultimo_estudiante = estudiante.length;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante[i].nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante[i].puntos_tecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante[i].puntos_HSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
 return(estudiantes)
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {
  var nombreEstudiante ;

   nombreEstudiante = nombreEstudiante.toLowerCase();

  if (nombreEstudiante == estudiantes[i].nombre) {
  //  return(estudiantes);
    document.write(estudiantes[i].nombre+ " " + estudiantes[i].puntos_tecnico +" " + estudiantes[i].puntos_HSE)

  }
  else {
    document.write(estudiantes[i].nombre+ " " + estudiantes[i].puntos_tecnico +" " + estudiantes[i].puntos_HSE)
  }
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante[i].nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante[i].puntos_tecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante[i].puntos_HSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
