
//https://youtu.be/k9JDYLNarV8


let imagenes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
let estado = 0;
let inicio;
let guionCSV;
let sonido;
let texto1 = "El viaje no terminó como esperabas, pero siempre hay una nueva oportunidad. ¿Te gustaría comenzar de nuevo y cambiar tu destino?";
let texto2 = "Has alcanzado el éxito en tu viaje. Sin embargo, el mundo está lleno de posibilidades. ¿Listo para una nueva aventura?";
let texto3 = "Reintentar";

function preload() {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage('imagenes/' + imagenes[i] + '.jpg');
  }
  guionCSV = loadTable('guion.csv', 'csv', 'header', ';');
  soundFormats('mp3', 'ogg');
  sonido = loadSound('sonido/sonido.mp3');
  imgVolumen = loadImage('imagenes/volumen.png');
  inicio = loadImage('imagenes/inicio.png')
}

function setup() {
  createCanvas(640, 480);
}


function draw() {


  //pantalla inicio
  if (estado === 0) {
    PantallaInicio();
    Boton();
  } else if (estado === 1) {
    Pantalla(0);
    dibujarBotonCambio();
    rectangulos(55, 201, 342, 23);
    textos(64, 202, 325, 30, 'Escena1_Narracion1');
    rectangulos(55, 424, 342, 23);
    textos(73, 430, 500, 80, 'Escena1_Narracion2');
  } else if (estado === 2) {
    Pantalla(1);
    dibujarBotonCambio();
    rectangulos(53, 36, 253, 32);
    textos(53, 41, 258, 30, 'Escena2_Narracion1');
    rectangulos(342, 192, 252, 26);
    textos(354, 200, 325, 30, 'Escena2_Narracion2');
    rectangulos(67, 403, 335, 31);
    textos(76, 408, 325, 30, 'Escena2_Narracion3');
    rectangulos(435, 380, 163, 59);
    nombres(515, 384, 'Escena2_Dialogo1');
    textos(435, 393, 166, 60, 'Escena2_Dialogo1');
  } else if (estado === 3) {
    Pantalla(2);
    dibujarBotonCambio();
    rectangulos(47, 162, 291, 44);
    textos(50, 162, 290, 50, 'Escena3_Narracion1');
    rectangulos(394, 176, 175, 30);
    textos(401, 178, 186, 50, 'Escena3_Narracion2');
    rectangulos(50, 404, 351, 31);
    textos(54, 404, 343, 50, 'Escena3_Narracion3');
    rectangulos(433, 380, 166, 54);
    textos(443, 390, 156, 70, 'Escena3_Narracion4');
  } else if (estado === 4) {
    Pantalla(3);
    dibujarBotonCambio();
    rectangulos(423, 207, 165, 26);
    textos(426, 207, 165, 50, 'Escena4_Narracion1');
    rectangulos(64, 383, 264, 52);
    nombres(174, 389, 'Escena4_Dialogo1');
    textos(68, 399, 255, 100, 'Escena4_Dialogo1');
    rectangulos(375, 399, 210, 39);
    nombres(460, 403, 'Escena4_Dialogo1');
    textos(377, 412, 202, 50, 'Escena4_Dialogo2');
  } else if (estado === 5) {
    Pantalla(4);
    dibujarBotonCambio();
    rectangulos(61, 42, 131, 24);
    nombres(115, 46, 'Escena5_Dialogo1');
    textos(75, 54, 105, 50, 'Escena5_Dialogo1');
    rectangulos(237, 216, 118, 23);
    nombres(290, 220, 'Escena5_Dialogo2');
    textos(279, 227, 32, 50, 'Escena5_Dialogo2');
    rectangulos(80, 432, 266, 23);
    textos(89, 438, 249, 50, 'Escena5_Narracion1');
  } else if (estado === 6) {
    Pantalla(5);
    dibujarBotonCambio();
    rectangulos(60, 411, 200, 38);
    textos(66, 410, 188, 100, 'Escena6_Narracion1') ;
  } else if (estado === 7) {
    Pantalla(6);
    dibujarBotonCambio();
    rectangulos(59, 404, 300, 26);
    textos(77, 404, 276, 50, 'Escena7_Narracion1')  ;
  }

  //eleccion 1
  else if (estado === 8) {
    Pantalla(7);
    DibujarBotones(100, 100);
    preguntas(223, 218, 224, 50, 'Escena8_Pregunta');
    Opciones(105, 393, 224, 50, 'Escena8_OpcionA');
    Opciones(384, 394, 224, 50, 'Escena8_OpcionB');
  }
  //
  else if (estado === 9) {
    Pantalla(8);
    dibujarBotonCambio();
    rectangulos(59, 98, 297, 30);
    textos(68, 102, 270, 50, 'Escena9_Narracion1');
    //
    rectangulos(59, 215, 305, 39);
    nombres(80, 220, 'Escena9_Dialogo1');
    textos(107, 216, 254, 50, 'Escena9_Dialogo1');
    //
    rectangulos(407, 2112, 163, 40);
    nombres(79, 230, 'Escena9_Dialogo2');
    textos(106, 226, 261, 50, 'Escena9_Dialogo2');
    //
    rectangulos(407, 212, 163, 40);
    nombres(458, 216, 'Escena9_Dialogo3');
    textos(413, 226, 153, 50, 'Escena9_Dialogo3');
    //
    rectangulos(59, 409, 153, 40);
    nombres(112, 415, 'Escena9_Dialogo4');
    textos(59, 423, 139, 50, 'Escena9_Dialogo4');
    //
    rectangulos(242, 409, 153, 40);
    nombres(291, 415, 'Escena9_Dialogo5');
    textos(248, 421, 144, 50, 'Escena9_Dialogo5');
    //
    rectangulos(428, 390, 153, 62);
    nombres(485, 398, 'Escena9_Dialogo6');
    textos(428, 406, 153, 100, 'Escena9_Dialogo6');
    //
  } else if (estado === 10) {
    Pantalla(9);
    dibujarBotonCambio();
    //
    rectangulos(55, 157, 128, 67);
    nombres(95, 165, 'Final1_Escena1_Dialogo1');
    textos(56, 169, 144, 100, 'Final1_Escena1_Dialogo1');
    //
    rectangulos(200, 169, 118, 52);
    nombres(235, 175, 'Final1_Escena1_Dialogo2');
    textos( 202, 181, 118, 100, 'Final1_Escena1_Dialogo2');
    //
    rectangulos(346, 176, 235, 43);
    textos(350, 182, 228, 100, 'Final1_Escena1_Narracion1');
    //
    rectangulos(57, 383, 115, 51);
    nombres(84, 388, 'Final1_Escena1_Dialogo3');
    textos(56, 395, 116, 100, 'Final1_Escena1_Dialogo3');
    //
    rectangulos(199, 383, 109, 51);
    nombres(222, 389, 'Final1_Escena1_Dialogo4');
    textos(200, 395, 116, 100, 'Final1_Escena1_Dialogo4');
    //
    rectangulos(332, 244, 115, 67);
    nombres(359, 249, 'Final1_Escena1_Dialogo5');
    textos(335, 257, 111, 100, 'Final1_Escena1_Dialogo5');
    //
    rectangulos(471, 368, 113, 65);
    nombres(503, 372, 'Final1_Escena1_Dialogo6');
    textos(471, 380, 112, 100, 'Final1_Escena1_Dialogo6');
  } else if (estado === 11) {
    Pantalla(10);
    dibujarBotonCambio();
    rectangulos(68, 195, 315, 32);
    textos(69, 198, 314, 50, 'Final1_Escena2_Narracion1');
    //
    rectangulos(418, 165, 176, 71);
    nombres(483, 170, 'Final1_Escena2_Dialogo1');
    textos(420, 178, 174, 100, 'Final1_Escena2_Dialogo1');
    //
    rectangulos(58, 414, 158, 24);
    nombres(106, 418, 'Final1_Escena2_Dialogo2');
    textos(123, 427, 29, 50, 'Final1_Escena2_Dialogo2');
    //
    rectangulos(245, 414, 152, 24);
    nombres(288, 418, 'Final1_Escena2_Dialogo3');
    textos(295, 426, 50, 50, 'Final1_Escena2_Dialogo3');
    //
    rectangulos(428, 388, 158, 53);
    nombres(482, 394, 'Final1_Escena2_Dialogo4');
    textos(431, 401, 162, 100, 'Final1_Escena2_Dialogo4');
  }
  //FINAL UNO
  else if (estado === 12) {
    Pantalla(11);
    volverAlInicio(100);
    mensajefinal(texto1, texto3);
    //
  } else if (estado === 13) {
    Pantalla(12);
    dibujarBotonCambio();
    rectangulos(66, 190, 241, 42);
    nombres(153, 197, 'Escena10_Dialogo1');
    textos(69, 204, 235, 50, 'Escena10_Dialogo1');
    //
    rectangulos(343, 181, 247, 55);
    nombres(435, 185, 'Escena10_Dialogo2');
    textos(347, 192, 249, 100, 'Escena10_Dialogo2');
    //
    rectangulos(66, 278, 270, 55);
    nombres(88, 283, 'Escena10_Dialogo3');
    textos(125, 281, 179, 50, 'Escena10_Dialogo3');
    nombres(88, 294, 'Escena10_Dialogo4');
    textos(123, 293, 213, 100, 'Escena10_Dialogo4');
    //
    rectangulos(373, 393, 218, 56);
    nombres(458, 399, 'Escena10_Dialogo5');
    textos(373, 409, 218, 100, 'Escena10_Dialogo5');
  }

  //eleccion 2
  else if (estado === 14) {
    Pantalla(13);
    DibujarBotones(100, 100);

    rectangulos(120, 48, 396, 40);
    nombres(140, 53, 'Escena11_Dialogo1');
    textos(168, 48, 347, 50, 'Escena11_Dialogo1');
    //
    nombres(140, 66, 'Escena11_Dialogo2');
    textos(175, 60, 347, 50, 'Escena11_Dialogo2');
    //
    preguntas(254, 220, 155, 50, 'Escena11_Pregunta2');
    Opciones(110, 387, 153, 50, 'Escena11_opcionA');
    Opciones(405, 387, 153, 50, 'Escena11_opcionB');
    //____________________________
  } else if (estado === 15) {
    Pantalla(14);
    dibujarBotonCambio();
    rectangulos(58, 166, 252, 70);
    nombres(153, 170, 'Escena12_Dialogo1');
    textos(61, 180, 252, 100, 'Escena12_Dialogo1');
    //
    rectangulos(342, 180, 247, 54);
    nombres(435, 185, 'Escena12_Dialogo2');
    textos(344, 194, 245, 100, 'Escena12_Dialogo2');
    //
    rectangulos(61, 408, 178, 38);
    nombres(119, 415, 'Escena12_Dialogo3');
    textos(67, 420, 166, 50, 'Escena12_Dialogo3');
    //
    rectangulos(268, 406, 149, 41);
    nombres(310, 415, 'Escena12_Dialogo4');
    textos(268, 420, 149, 50, 'Escena12_Dialogo4');
    //
    rectangulos(447, 406, 139, 40);
    nombres(494, 412, 'Escena12_Dialogo5');
    textos(452, 420, 130, 50, 'Escena12_Dialogo5');
  } else if (estado === 16) {
    Pantalla(15);
    dibujarBotonCambio();
    rectangulos(28, 125, 168, 40);
    nombres(81, 130, 'Final2_Escena13_Dialogo1');
    textos(32, 139, 165, 50, 'Final2_Escena13_Dialogo1');
    //
    rectangulos(228, 124, 171, 41);
    nombres(279, 129, 'Final2_Escena13_Dialogo2');
    textos(228, 136, 174, 50, 'Final2_Escena13_Dialogo2');
    //
    rectangulos(431, 116, 183, 49);
    nombres(498, 120, 'Final2_Escena13_Dialogo3');
    textos(431, 130, 184, 100, 'Final2_Escena13_Dialogo3');
    //
    rectangulos(28, 360, 216, 54);
    nombres(50, 369, 'Final2_Escena13_Dialogo4');
    textos(75, 365, 160, 50, 'Final2_Escena13_Dialogo4');
    nombres(50, 395, 'Final2_Escena13_Dialogo5');
    textos(75, 388, 187, 50, 'Final2_Escena13_Dialogo5');
    //
    rectangulos(279, 389, 109, 25);
    nombres(310, 395, 'Final2_Escena13_Dialogo6');
    textos(313, 403, 30, 50, 'Final2_Escena13_Dialogo6');
    //
    rectangulos(421, 217, 187, 111);
    nombres(490, 225, 'Final2_Escena13_Dialogo7');
    textos(430, 232, 182, 200, 'Final2_Escena13_Dialogo7');
  }
  //FINAL DOS
  else if (estado === 17) {
    Pantalla(16);
    rectangulos(279, 60, 109, 25);
    nombres(329, 65, 'Final2_Escena14_Dialogo1');
    textos(309, 73, 51, 50, 'Final2_Escena14_Dialogo1');
    volverAlInicio(100);
    mensajefinal(texto2, texto3);
    //
  } else if (estado === 18) {
    Pantalla(17);
    dibujarBotonCambio();
    rectangulos(68, 155, 191, 38);
    nombres(140, 165, 'Final3_Escena15_Dialogo1');
    textos(68, 168, 191, 50, 'Final3_Escena15_Dialogo1');
    //
    rectangulos(297, 141, 279, 55);
    nombres(320, 150, 'Final3_Escena15_Dialogo2');
    textos(346, 144, 201, 50, 'Final3_Escena15_Dialogo2');
    nombres(320, 165, 'Final3_Escena15_Dialogo3');
    textos(346, 170, 230, 50, 'Final3_Escena15_Dialogo3');
    //
    rectangulos(68, 402, 97, 31);
    nombres(93, 408, 'Final3_Escena15_Dialogo4');
    textos(69, 412, 97, 50, 'Final3_Escena15_Dialogo4');
    //
    rectangulos(184, 408, 99, 23);
    nombres(211, 412, 'Final3_Escena15_Dialogo5');
    textos(185, 420, 92, 50, 'Final3_Escena15_Dialogo5');
    //
    rectangulos(306, 396, 117, 34);
    nombres(339, 400, 'Final3_Escena15_Dialogo6');
    textos(309, 409, 109, 50, 'Final3_Escena15_Dialogo6');
    //
    rectangulos(442, 227, 140, 100);
    nombres(487, 237, 'Final3_Escena15_Dialogo7');
    textos(448, 250, 144, 200, 'Final3_Escena15_Dialogo7');
  }
  //FINAL TRES
  else if (estado === 19) {
    Pantalla(18);
    rectangulos(279, 60, 109, 25);
    nombres(329, 65, 'Final2_Escena14_Dialogo1');
    textos(309, 73, 51, 50, 'Final2_Escena14_Dialogo1');
    volverAlInicio(100);
    mensajefinal(texto2, texto3);
  }
  //pantalla creditos
  if (estado === 20) {
    PantallaCreditos(255);
  }
}



function mousePressed() {
  //botones de eleccion
  if (estado == 8 && mouseX > 73 && mouseX < 73+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 9;
  }
  if (estado == 8 && mouseX > 362 && mouseX < 362+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 13;
  }
  if (estado == 14 && mouseX > 73 && mouseX < 73+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 15;
  }
  if (estado == 14 && mouseX > 362 && mouseX < 362+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 18;
  }

  //boton empezar y creditos:
  if (estado === 0 && mouseX > 207 && mouseX < 207 + 222 && mouseY > 349 && mouseY < 349 + 45) {
    estado = 1;
  }
  if (estado === 0 && mouseX > 207 && mouseX < 207 + 222 && mouseY > 409 && mouseY < 409 + 45) {
    estado = 20;
  }

  //botones para pasar pantallas
  //avanzar

  if (estado == 1 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 2;
  } else if (estado == 2 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 3;
  } else if (estado == 3 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 4;
  } else if (estado == 4 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 5;
  } else if (estado == 5 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 6;
  } else if (estado == 6 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 7;
  } else if (estado == 7 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 8;
  } else if (estado == 9 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 10;
  } else if (estado == 10 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 11;
  } else if (estado == 11 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 12;
  } else if (estado == 13 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 14;
  } else if (estado == 15 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 16;
  } else if (estado ==  16 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 17;
  } else if (estado == 18 && dist(mouseX, mouseY, 612, 18) < 20 / 2) {
    estado = 19;
  }

  //retroceder

  if (estado == 1 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 0;
  } else if (estado == 2 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 1;
  } else if (estado == 3 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 2;
  } else if (estado == 4 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 3;
  } else if (estado == 5 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 4;
  } else if (estado == 6 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 5;
  } else if (estado == 7 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 6;
  } else if (estado == 9 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 8;
  } else if (estado == 10 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 9;
  } else if (estado == 11 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 10;
  } else if (estado == 13 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 8;
  } else if (estado == 15 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 14;
  } else if (estado == 16 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 15;
  } else if (estado == 18 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 14;
  } else if (estado == 20 && dist(mouseX, mouseY, 30, 18) < 20 / 2) {
    estado = 0;
  }

  //boton para activar la musica
  if (estado == 0 && mouseX > width - 50 && mouseX < width - 10 && mouseY > height - 50 && mouseY < height - 10) {
    sonido.play();
    sonido.setVolume(0.5);
  }


  //botones de reinicio
  if (estado == 12 && mouseX > 191 && mouseX < 191+257 && mouseY > 353 && mouseY < 353 + 49) {
    estado = 0;
    ReiniciarSonido() ;
  }
  if (estado == 17 && mouseX > 191 && mouseX < 191+257 && mouseY > 353 && mouseY < 353 + 49) {
    estado = 0;
    ReiniciarSonido() ;
  }
  if (estado == 19 && mouseX > 191 && mouseX < 191+257 && mouseY > 353 && mouseY < 353 + 49) {
    estado = 0;
    ReiniciarSonido() ;
  }
}
