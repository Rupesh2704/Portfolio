const text = "Hi There I'm Rupesh Dahibhate";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
    }
}

typeWriter();
