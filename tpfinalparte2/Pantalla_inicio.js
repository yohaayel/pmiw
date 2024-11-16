function PantallaInicio() {
  background(255, 49, 49);
  image(intro, 0, 0);
  BotonEmpezar();
  BotonCreditos();
}
function BotonEmpezar() {
  noStroke();
  fill(242, 155, 15);
  rect(207, 349, 222, 45, 10);
  fill(255);
  textSize(30);
  text("Empezar", 250, 380);
}

function BotonCreditos() {
  noStroke();
  fill(242, 155, 15);
  rect(207, 409, 222, 45, 10);
  fill(255);
  textSize(30);
  text("Creditos", 255, 440);
}

//function BotonReiniciar() {
//  fill(90, 176, 50);
//  rect(207, 409, 222, 45, 10);
//  fill(255);
//  textSize(30);
//  text("Reiniciar", 255, 440);
//}
