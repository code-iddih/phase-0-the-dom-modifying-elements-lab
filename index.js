// Write your code here!

// Remove the <main> element with id 'main' from the DOM
const mainElement = document.getElementById('main').remove();

// Creates a 'newHeader' variable that points to an <h1> node
let newHeader = document.createElement('h1');

// The 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = 'victory';

// the 'newHeader' variable that points to the <h1> node with an id of 'victory' ...
// has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
newHeader.textContent = 'YOUR-NAME is the champion';

// Appends the new <h1> element to the document body
document.body.appendChild(newHeader);
