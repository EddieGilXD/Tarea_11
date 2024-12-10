const textElement = document.getElementById('highlightText');

textElement.addEventListener('click', function() {
    this.classList.toggle('highlight');
});