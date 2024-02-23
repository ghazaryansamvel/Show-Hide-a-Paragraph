let paragraph = document.getElementById('paragraph');
let button = document.getElementById('button');

button.addEventListener('click', () => {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        paragraph.style.display = 'none';
        button.textContent = 'Show';
    }
});