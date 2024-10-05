// This function will be called when you hover over the link
function highlight() {
    // Get all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change the color to green
    boldWords.forEach(function(word) {
        word.style.color = 'green';
    });
}

// This function will be called when you hover out of the link
function return_normal() {
    // Get all <strong> elements in the document
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change the color back to black
    boldWords.forEach(function(word) {
        word.style.color = 'black';
    });
}

