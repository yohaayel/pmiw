//https://youtu.be/HkpAuafWLLw

let juego;
let VolpinaImg;
let intro;
let estado = 0;
let fondo;
let imagenPersonaje;
this.juegoTerminado = false;
let sonido;
//prueba1
function preload() {
  VolpinaImg = loadImage('data/volpina.png');
  intro = loadImage('data/intro.png');
  fondo = loadImage('data/fondo.png');
  imagenPersonaje = loadImage('data/luka.png');

  soundFormats('mp3', 'ogg');
  sonido = loadSound('data/sonido.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego(); // Instancia el objeto principal del juego
}

function draw() {
  background(fondo);
  if (estado === 0) {
    PantallaInicio();
  } else if (estado === 1) {
    PantallaTutorial();
  } else if (estado === 2 ) {
    juego.actualizar(); // Llama al método para actualizar el estado del juego
    juego.mostrar(); // Llama al método para dibujar los objetos en pantalla
    juego.verificarTiempo();// Verifica si el juego debe finalizar por tiempo o puntuación

    if (!sonido.isPlaying()) { // sonido
      sonido.play();
    }
  } else if (estado === 3) { //  créditos
    PantallaCreditos(255);
  }
}

function mousePressed() {
  if (estado === 0) {
    // Botón Empezar
    if (mouseX > 207 && mouseX < 207 + 222 && mouseY > 349 && mouseY < 349 + 45) {
      estado = 1; // Ir al tutorial
    }
    // Botón Créditos
    if (mouseX > 207 && mouseX < 207 + 222 && mouseY > 409 && mouseY < 409 + 45) {
      estado = 3;
    }
  } else if (estado === 1) {
    // Botón Continuar después del tutorial
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height - 80 && mouseY < height - 40) {
      estado = 2;
      sonido.play();
    }
  } else if (estado === 2) {
    juego.detectarClick(mouseX, mouseY);
  } else if (estado === 3) {
    // Detectar clic en el botón de volver
    if (dist(mouseX, mouseY, 30, 18) < 10) {
      estado = 0; // Volver a la pantalla de inicio
    }
  }
}
