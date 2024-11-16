class PersonajeNormal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //this.radio = 30;
    this.tiempoDeVida = 1500; // Tiempo de vida en milisegundos
    this.imagen = imagenPersonaje;
    this.tamañoAncho = 120; // Ancho de la imagen
    this.tamañoAlto = 200;  // Alto de la imagen
}

  actualizar() {
    this.tiempoDeVida -= deltaTime; // Reducir tiempo de vida en cada cuadro
  }

  mostrar() {
    // Calcula la opacidad con base en el tiempo de vida restante
    let alpha = map(this.tiempoDeVida, 0, 2000, 0, 255); // Mapea el tiempo de vida de 0 a 255
    
    // Asegura que alpha no sea menor a 0
    alpha = max(0, alpha);
    
    // Aplica el efecto de desvanecimiento con tint
    tint(255, 255, 255, alpha); // El cuarto valor es la opacidad (alpha)
    
    image(this.imagen, this.x, this.y, this.tamañoAncho, this.tamañoAlto);
    
    // Quita el efecto tint para no afectar otras imágenes
    noTint();
  }

  contiene(px, py) {
    return px > this.x && px < this.x + this.tamañoAncho && py > this.y && py < this.y + this.tamañoAlto;
  }
}
