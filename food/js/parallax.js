function parallax(event) {
    this.querySelectorAll('.parallax-icons i').forEach(layer => {
        layer.style.transform = 'translateX(' + event.clientX/50 + 'px)' + 'translateY(' + event.clientY/50 + 'px)';
    });
}

document.addEventListener('mousemove', parallax);