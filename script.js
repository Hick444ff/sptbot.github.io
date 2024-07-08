// script.js
document.getElementById('identifySignal').addEventListener('click', function() {
    const grid = document.getElementById('grid');
    const slots = grid.getElementsByClassName('slot');
    for (let slot of slots) {
        slot.classList.toggle('diamond');
    }
});
