// Function to be called when the form is submitted
function submitForm() {
    // Get the values from the input fields
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;

    // Get the reference to the results div
    const resultsDiv = document.getElementById('results');

    // Create a new paragraph element
    const paragraph = document.createElement('p');

    // Set the text content of the paragraph with the entered values
    paragraph.textContent = `Field 1: ${input1}, Field 2: ${input2}, Field 3: ${input3}`;

    // Dynamically style the paragraph (for example, give each paragraph a different color).
    const colors = ['#ff5733', '#33ff57', '#5733ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    paragraph.style.color = randomColor;

    // Append the created paragraph to the results div
    resultsDiv.appendChild(paragraph);
}
