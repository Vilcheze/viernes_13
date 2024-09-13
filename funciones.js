var imageIndex = 0;
        var imageArray = ["img2/img1.jpg", "img2/img2.jpg", "img2/img3.jpg", "img2/img4.jpg", "img2/img5.jpg", "img2/img6.jpg", "img2/img7.jpg", "img2/img8.jpg", "img2/img9.jpg", "img2/img10.jpg", "img2/img11.jpg", "img2/img12.jpg", "img2/img13.jpg", "img2/img14.jpg"];
        var textArray = [
            "🥰",
            "🐣",
            "😍",
            "😆",
            "😄",
            "👧🏽👧🏽",
            "😘",
            "😊",
            "📸",
            "😄",
            "🤨",
            "🎨❤️‍🩹",
            "👧🏽👧🏽",
            "👁️😍",

        ];

         var imageElement = document.getElementById("image");
        var textElement = document.getElementById("text");

        function showNextImage() {
            imageElement.src = imageArray[imageIndex];
            textElement.textContent = textArray[imageIndex];
            imageIndex = (imageIndex + 1) % imageArray.length;
        }

        function startImageRotation() {
            showNextImage();
            setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
        }

        // Iniciar la rotación automática de imágenes al cargar la página
        startImageRotation();

// Función para cambiar entre divs
 function cambiarDivs() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var toggleButton = document.getElementById("toggleButton");

    if (div1.style.display === "block") {
        div1.style.display = "none";
        div2.style.display = "block";
        toggleButton.classList.add("active");
        toggleButton.textContent = "Video";// Cambia el texto del botón
    } else {
        div1.style.display = "block";
        div2.style.display = "none";
        toggleButton.classList.remove("active");
        toggleButton.textContent = "Canción";// Cambia el texto del botón
    }
}
