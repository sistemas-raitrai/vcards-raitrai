// ============================================
// BORDE HOTELES - LANDING NFC CONTACTOS
// ============================================

// Detecta si viene desde móvil para experiencia NFC más natural
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Tracking visual simple
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const cardName = this.closest(".card").querySelector(".name").innerText;

    console.log("Contacto abierto:", cardName);

    // Feedback visual opcional
    this.innerText = "Abriendo contacto...";
    
    setTimeout(() => {
      this.innerText = "Guardar contacto";
    }, 1500);
  });
});

// Mensaje opcional en consola
console.log("Landing Borde Hoteles activa");
console.log("Modo móvil:", isMobile);
