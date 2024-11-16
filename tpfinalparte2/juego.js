class Juego {
  constructor() {
    this.puntuacion = 0; // Puntuación del jugador
    this.tiempoRestante = 30; // Tiempo en segundos
    this.temporizador = new Temporizador(this.tiempoRestante); // Instancia de la clase Temporizador
    this.objetos = []; // Array para almacenar las ilusiones y personajes normales
    this.intervaloAparicion = 1000; // Intervalo entre apariciones (1 segundo)
    this.ultimoTiempo = millis(); // Registra el último tiempo de aparición
  }

  actualizar() {
    // Controla la aparición progresiva de ilusiones y personajes
    if (millis() - this.ultimoTiempo > this.intervaloAparicion) {
      this.generarObjetoAleatorio(); // Genera un nuevo objeto
      this.ultimoTiempo = millis(); // Actualiza el último tiempo de aparición
    }

    // Actualizar y eliminar objetos cuando tiempo de vida haya terminado
    for (let i = this.objetos.length - 1; i >= 0; i--) {
      this.objetos[i].actualizar(); // Actualiza cada objeto
      if (this.objetos[i].tiempoDeVida <= 0) {
        this.objetos.splice(i, 1); // Elimina el objeto si se acaba su tiempo de vida
      }
    }
  }

  generarObjetoAleatorio() {
    // Genera de forma aleatoria ilusiones o personajes normales
    let tipo = random() < 0.7 ? "ilusion" : "personaje"; // 70% ilusión, 30% personaje normal
   //si random() < 0.7 es true (lo que ocurre el 70% de las veces), se asigna "ilusion" a tipo.
   //Si es false (el 30% de las veces), se asigna "personaje".
    let x = random(width - 120);
    let y = random(height - 200);
    if (tipo === "ilusion") {
      this.objetos.push(new Ilusion(x, y));
    } else {
      this.objetos.push(new PersonajeNormal(x, y));
    }
  }

  mostrar() {
    this.temporizador.mostrar(); // Muestra el tiempo restante
    for (let objeto of this.objetos) {
      objeto.mostrar(); // Muestra cada objeto en pantalla
    }
    textSize(20);
    fill(0);
    text("Puntuación: " + this.puntuacion, 60, 30); // Muestra la puntuación en pantalla
  }

  detectarClick(x, y) {
    // Si el juego está terminado, verifica si se hizo clic en el botón de reinicio
    if (this.juegoTerminado) {
      this.detectarClickReinicio(x, y);
      return;
    }
    for (let i = this.objetos.length - 1; i >= 0; i--) {
      if (this.objetos[i].contiene(x, y)) {
        if (this.objetos[i] instanceof Ilusion) {
          this.puntuacion++; // Suma puntos al hacer click en una ilusión
          this.objetos.splice(i, 1); // Elimina la ilusión clickeada
        } else if (this.objetos[i] instanceof PersonajeNormal) {
          this.puntuacion--; // Penalización por clickear un personaje normal
        }
      }
    }
  }
  dibujarBotonReinicio() {
    
    fill(242, 155, 15);
    rect(width/2 - 60, height/2 + 20, 120, 40);    
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Reiniciar", width/2, height/2 + 40);
    textAlign(LEFT, BASELINE);
  }
   detectarClickReinicio(x, y) {
    // Verifica si el clic fue dentro del botón de reinicio
    if (x > width/2 - 60 && x < width/2 + 60 &&
        y > height/2 + 20 && y < height/2 + 60) {
        console.log("Botón presionado"); // Para debug
        this.reiniciarJuego();
    }
  }

  
reiniciarJuego() {
    // Reiniciar todas las propiedades
    this.puntuacion = 0;
    this.tiempoRestante = 30;
    this.temporizador = new Temporizador(this.tiempoRestante);
    this.objetos = [];
    this.ultimoTiempo = millis();
    this.juegoTerminado = false;
    estado = 0;
     sonido.stop();
    
    loop(); // Reiniciar el bucle de draw
  }
  

  verificarTiempo() {
    if (this.temporizador.tiempoAgotado() || this.puntuacion >= 15) {
       this.juegoTerminado = true;
       
      noLoop(); // Detiene el juego si el tiempo se agota o se alcanza la puntuación de 15
      textSize(32);
      fill(255, 0, 0);
      text(this.puntuacion >= 15 ? "¡Ganaste!" : "Tiempo agotado", width / 2, height / 2);
       this.dibujarBotonReinicio();
    }
   
  }
}
