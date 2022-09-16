// Adicionar e remover os itens
let valueBanana = 0;
let valueLaranja = 0;
let valueMaca = 0;

function incrementar() {
    document.getElementById("display").innerHTML = `${++valueBanana}`;
}
function decrementar() {
    document.getElementById("display").innerHTML = `${--valueBanana}`;
}
function incrementar2() {
    document.getElementById("display2").innerHTML = `${++valueLaranja}`;
}
function decrementar2() {
    document.getElementById("display2").innerHTML = `${--valueLaranja}`;
}
function incrementar3() {
    document.getElementById("display3").innerHTML = `${++valueMaca}`;
}
function decrementar3() {
    document.getElementById("display3").innerHTML = `${--valueMaca}`;
}
// Adicionar endereço
const btn = document.querySelector("#send");
btn.addEventListener("click", function(e){

  e.preventDefault();
  const name = document.querySelector("#name");
  const value = name.value;
  console.log(value);
})
