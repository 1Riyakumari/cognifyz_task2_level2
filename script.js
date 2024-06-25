// JavaScript to handle the button click and change color
const button = document.getElementById('colorButton');
const colors = ["#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f", "#e67e22"];
let currentIndex = 0;

button.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentIndex];
});
// JavaScript to show a greeting based on the current time
document.getElementById('greetButton').addEventListener('click', () => {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
});
// JavaScript to perform the addition and show the result
document.getElementById('addButton').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    const sum = num1 + num2;
    document.getElementById('result').innerText = "Result: " + sum;
});
