function parallax(event) {
    this.querySelectorAll('.parallax-icons i').forEach(layer => {
        layer.style.transform = 'translateX(' + event.clientX/60 + 'px)' + 'translateY(' + event.clientY/60 + 'px)';
    });
}

document.addEventListener('mousemove', parallax);