// Get all elements with the "code-example" class
const codeExamples = document.querySelectorAll('.code-example');

// Add event listeners to each code example
codeExamples.forEach((example) => {
    example.addEventListener('mouseover', () => {
        const htmlCode = example.getAttribute('data-html-code');
        const codeElement = example.nextElementSibling;
        
        // Display the HTML code
        codeElement.textContent = htmlCode;
        codeElement.style.display = 'block';
    });

    example.addEventListener('mouseout', () => {
        const codeElement = example.nextElementSibling;
        
        // Hide the HTML code when the mouse leaves
        codeElement.style.display = 'none';
    });
});
