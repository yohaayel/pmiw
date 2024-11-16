
function Pantalla(numImagen) {

  image(imagenes[numImagen], 0, 0, width, height);
}

//botones de eleccion
function DibujarBotones(alpha1, alpha2) {
  fill(255, 114, 117, alpha1);
  stroke(255, 49, 49);
  rect(73, 385, 212, 31, 10);
  fill(255, 114, 117, alpha2);
  rect(362, 385, 212, 31, 10);
}
//narración y dialogos
function textos(x, y, an, al, id) {
  textAlign(LEFT, TOP);
  textSize(10);
  noStroke();
  fill(255);
  text(GetTextCSV(id, 'Es'), x, y, an, al);
}
function nombres(x, y, id) {
  textAlign(CENTER, CENTER);
  textSize(10);
  noStroke();
  fill(255);
  text(GetTextCSV(id, 'Nombres'), x, y);
}
function rectangulos(x, y, an, al) {
  stroke(255, 49, 49)
    fill(255, 87, 87);
  rect(x, y, an, al, 5);
}

//botones de reinicio
function volverAlInicio(A) {
  fill(216, 44, 91, A);
  rect(191, 353, 257, 49, 30);
}
// textos de elecciones
function preguntas(x, y, an, al, id) {
  fill(219, 219, 219, 150);
  noStroke();
  textAlign(CENTER, CENTER);
  rect(151, 150, 336, 172, 20);
  textSize(20);
  noStroke();
  fill(255);
  text(GetTextCSV(id, 'Es'), x, y, an, al);
}

function Opciones(x, y, an, al, id) {
  textSize(12);
  textAlign(LEFT, TOP);
  noStroke();
  fill(255);
  text(GetTextCSV(id, 'Es'), x, y, an, al);
}
//
function mensajefinal(texto1, texto2) {
  fill(219, 219, 219, 150);
  noStroke();
  rect(151, 150, 336, 172, 20);
  textSize(20);
  fill(94, 23, 235);
  textAlign(CENTER, CENTER);
  text(texto1, 166, 162, 306, 145);
  text(texto2, 130, 360, 380, 32);
}
//botones de cambio de pantalla
function dibujarBotonCambio() {
  noStroke();
  fill(30, 38, 229, 100);
  circle(30, 18, 20);
  circle(612, 18, 20);
  fill(85, 92, 255, 100);
  triangle(25, 18, 33, 14, 33, 22);
  triangle(610, 14, 618, 18, 610, 22);
}

//boton de musica
function Boton() {
  fill(0);
  rect(width - 50, height - 50, 40, 40);
  image(imgVolumen, width - 50, height - 50, 40, 40);
}

//
function GetTextCSV(_id, _columna) {
  let IDColumna = guionCSV.getColumn('ID');

  for (let fila = 0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id) {
      return guionCSV.getColumn(_columna)[fila];
    }
  }
  return "NO SE ENCONTRO EL ID: " + _id;
}
