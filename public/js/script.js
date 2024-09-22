const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F',
    '#E74C3C', '#8E44AD', '#3498DB', '#2ECC71',
    '#F39C12', '#1ABC9C'
];

let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Loop through colors
}

setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds
