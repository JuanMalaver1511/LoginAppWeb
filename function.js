function toggleLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.dataset.lang === 'en') {
            element.style.display = 'none';
        } else if (element.dataset.lang === 'es') {
            element.style.display = 'block';
        }
    });
}