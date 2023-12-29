// script.js

function submitForm() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    const resultsDiv = document.getElementById('results');

    const paragraph = document.createElement('p');
    paragraph.textContent = `Field 1: ${input1}, Field 2: ${input2}, Field 3: ${input3}`;

    // Dynamically style the paragraph (for example, give each paragraph a different color).
    const colors = ['#ff5733', '#33ff57', '#5733ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    paragraph.style.color = randomColor;

    resultsDiv.appendChild(paragraph);
}
