document.getElementById("surpriseButton").addEventListener("click", function() {
    document.getElementById("heartAnimation").classList.remove("hidden");
    this.style.display = 'none'; // Oculta el botón después de hacer clic
});
