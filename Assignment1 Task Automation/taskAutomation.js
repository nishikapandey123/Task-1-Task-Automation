// Import the 'fs' (File System) module to work with file operations in Node.js.
const fs = require('fs');

// Specify the directory path where the files will be created and manipulated.
const directoryPath = 'task_automation';

// Define a default content for the text files.
const fileContents = 'This is the content of the file.';

// Check if the directory "task_automation" exists. If not, create it.
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log('Directory created successfully.');
}

// Create three text files inside the "task_automation" directory with the specified content.
fs.writeFileSync(`${directoryPath}/file1.txt`, fileContents);
fs.writeFileSync(`${directoryPath}/file2.txt`, fileContents);
fs.writeFileSync(`${directoryPath}/file3.txt`, fileContents);

console.log('Three text files created successfully.');

// Concatenate the content of the three files into a new file named "concatenated.txt."
const concatenatedContent = fs.readFileSync(`${directoryPath}/file1.txt`) +
                           fs.readFileSync(`${directoryPath}/file2.txt`) +
                           fs.readFileSync(`${directoryPath}/file3.txt`);

// Write the concatenated content to a new file named "concatenated.txt."                           
fs.writeFileSync(`${directoryPath}/concatenated.txt`, concatenatedContent);

console.log('Content concatenated and saved to concatenated.txt.');

// Read and print the content of "concatenated.txt" to the console.
const contentToPrint = fs.readFileSync(`${directoryPath}/concatenated.txt`, 'utf-8');
console.log('Content of concatenated.txt:', contentToPrint);
