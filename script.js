const button = document.getElementById('clickMe');
const output = document.getElementById('output');

button.addEventListener('click', () => {
    const messages = ["Hello!", "Hi there!", "Welcome!", "You clicked!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    output.textContent = randomMessage;
});