window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 0);
})