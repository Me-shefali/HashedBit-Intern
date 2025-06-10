document.getElementById("colorchange").addEventListener("click", function () {
    const color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
    const size = this.value + "px";
    document.getElementById("text-container").style.fontSize = size;
});

document.getElementById("italic").addEventListener("click", function () {
    const text = document.getElementById("text-container");
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    const text = document.getElementById("text-container");
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    const text = document.getElementById("text-container");
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    const font = this.value;
    document.getElementById("text-container").style.fontFamily = font;
});

document.getElementById("getstyle").addEventListener("click", function () {
    const text = document.getElementById("text-container");
    const styles = window.getComputedStyle(text);

    const output = `
    color: ${styles.color}; 
    font-size: ${styles.fontSize}; 
    font-family: ${styles.fontFamily}; 
    font-weight: ${styles.fontWeight}; 
    font-style: ${styles.fontStyle}; 
    text-decoration: ${styles.textDecorationLine};
  `;

    document.getElementById("css-props").textContent = output.trim().replace(/\s+/g, ' ');
});
