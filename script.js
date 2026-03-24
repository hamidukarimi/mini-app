const button = document.getElementById('clickMe');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    output.textContent = "Hello! You clicked the button!";
});