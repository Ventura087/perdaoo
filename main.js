var moveButton = document.querySelector(".errado");
var botaoCerto = document.querySelector(".certo");
var botaoVoltar = document.querySelector(".voltar");

var telaUm = document.querySelector(".container-principal");
var telaDois = document.querySelector(".container-segundario");

var clicou = 0

moveButton.addEventListener("click", function () {
var vertical = Math.floor(Math.random() * 400);
var horizontal = Math.floor(Math.random() * 400);
moveButton.style.position = "absolute";
moveButton.style.left = vertical + "px";
moveButton.style.top = horizontal + "px";

console.log(clicou)
clicou++
if(clicou === 6) {
    alert("Clica em SIM ae mano")
    clicou = 0
}

});

botaoCerto.addEventListener("click", function() {
    telaUm.style.display = "none";
    telaDois.style.display = "block"
})

botaoVoltar.addEventListener("click", function() {
    telaUm.style.display = "flex";
    telaDois.style.display = "none";
})