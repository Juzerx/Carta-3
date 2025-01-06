const carta = document.getElementById("carta_img");
const cartaText = document.getElementById("carta");
carta.addEventListener("click", function () {
    carta.classList.remove("shake");
    carta.classList.add("hidden");
    cartaText.style.display = "block";
})