function PantallaInicio(){
  background(255, 49, 49);
image(inicio,46,26,547,305);
for (let x = 0; x < width; x += 49) {
    for (let y = 0; y < height; y += 49) {
      fill(0);
      ellipse(x, y, 35, 35);      
}
image(inicio,46,26,547,305);
BotonEmpezar()
BotonCreditos()
}
}
 function BotonEmpezar(){
   noStroke();
fill(90,176,50);
rect(207,349,222,45,10); 
fill(255);
textSize(30);
text("Empezar",250,380);
   
 }
 
 function BotonCreditos(){
    noStroke();
 fill(90,176,50);
rect(207,409,222,45,10); 
fill(255);
textSize(30);
text("Creditos",255,440);
   
 }
 
 function BotonReiniciar(){
  fill(90,176,50);
rect(207,409,222,45,10); 
fill(255);
textSize(30);
text("Reiniciar",255,440);
   
 }
function ReiniciarSonido() {
  sonido.stop(); 
  sonido.play(); 
}
