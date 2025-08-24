const p1 = document.getElementById("parrafo1");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const parrafo2 = document.querySelector("#parrafo2");

p1.textContent = "MIREN AUNQUE ESTABA CON OTRA COSA ESCRITA, YO LO CAMBIO JS";

button1.addEventListener("click", Hola);
button2.addEventListener("click", cambiarParrafo2);

function Hola() {
  p1.textContent = "ESTO LO CAMBIAMOS CON EL SUPERVISOR DE ABEJA";
  parrafo2.textContent = "ESTO LO HIZO RODOLFO";
}

function cambiarParrafo2() {
  parrafo2.textContent = "Este ejemplo es para Karina";
}
