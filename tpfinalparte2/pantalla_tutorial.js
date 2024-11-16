function PantallaTutorial() {
  background(242, 180, 40);
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("¡Bienvenido al tutorial!", width / 2, 80);
  textSize(20);
  text(
    "Reglas del juego:\n\n" +
      "- Haz clic en las ilusiones de volpina para ganar puntos.\n" +
      "- Evita hacer clic en los personajes normales o perderás puntos.\n" +
      "- Gana alcanzando 15 puntos antes de que se acabe el tiempo.\n" +
      "- El juego termina si se agota el tiempo.",
    width / 2,
    140
  );

  textSize(18);
  text("Haz clic en el botón para comenzar.", width / 2, height - 100);

  // Botón Continuar
  fill(0, 150, 200);
  rect(width / 2 - 100, height - 80, 200, 40, 10);
  fill(255);
  textSize(22);
  text("Continuar", width / 2, height - 55);
}
