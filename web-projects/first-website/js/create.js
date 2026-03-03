

// I want to create a auto resize inout field

const input = document.querySelector('input');
input.addEventListener('input', function() {
    this.style.width = 'auto';
    this.style.width = (this.scrollWidth - 40) + 'px';
});


