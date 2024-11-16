class Temporizador {
  constructor(segundos) {
    this.tiempoInicial = millis(); // Tiempo al inicio del juego
    this.duracion = segundos * 1000; // Convierte segundos a milisegundos
  }

  mostrar() {
    let tiempoRestante = this.duracion - (millis() - this.tiempoInicial);
    textSize(20);
    fill(0);
    text("Tiempo: " + max(0, floor(tiempoRestante / 1000)), width - 120, 30);
  }

  tiempoAgotado() {
    return millis() - this.tiempoInicial >= this.duracion;
  }
}
