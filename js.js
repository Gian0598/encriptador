document.addEventListener("DOMContentLoaded", function() {
    const inputTexto = document.querySelector(".ingresar-texto");
    const spanMostrarTexto2 = document.querySelector(".mostrar-texto-2 h2");
    const spanMostrarTexto3 = document.querySelector(".mostrar-texto-3 h3");
    const botones = document.querySelectorAll(".botones button");

    function encriptar(texto) {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    function desencriptar(texto) {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            let textoIngresado = inputTexto.value.toLowerCase();
            let textoResultado = "";

            if (boton.classList.contains("encriptador")) {
                textoResultado = encriptar(textoIngresado);
            } else if (boton.classList.contains("desencriptar")) {
                textoResultado = desencriptar(textoIngresado);
            }

            spanMostrarTexto2.textContent = textoResultado;
            spanMostrarTexto3.textContent = "";
        });
    });
});
