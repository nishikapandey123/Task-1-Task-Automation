# Task Automation Project

This project demonstrates task automation using Node.js for file operations and dynamic updates to a web page through HTML, CSS, and JavaScript.

## Files Overview

### 1. `index.html`

The HTML file contains a form allowing users to input text into three separate fields. Upon submission, the entered text is appended to a results container on the page.

### 2. `script.js`

JavaScript file (`script.js`) is responsible for dynamically updating the results container when the form is submitted. Each entry is styled with a random color.

### 3. `styles.css`

The CSS file (`styles.css`) provides styling for the entire page, including the form, input fields, submit button, and the results container. Paragraphs in the results container are styled with background colors.

### 4. `taskAutomation.js`

The Node.js script (`taskAutomation.js`) automates tasks by creating a directory, generating three text files with default content, concatenating their content into a new file, and printing the result.

## How to Run

1. **Node.js Script**
    ```bash
    node taskAutomation.js
    ```

2. **HTML, CSS, and DOM Manipulation**
    Open the `index.html` file in a web browser.

## Project Structure

```plaintext
|-- task_automation/          (Generated directory by Node.js script)
|   |-- file1.txt
|   |-- file2.txt
|   |-- file3.txt
|   |-- concatenated.txt
|-- index.html
|-- script.js
|-- styles.css
|-- taskAutomation.js
|-- README.md

## Credits

- Created by Nishika Pandey.

Feel free to customize this README.md file based on your specific project details and requirements. Include additional information, such as how to contribute, known issues, or any other relevant details.
