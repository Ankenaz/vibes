const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {

    const section = Document.querySelector('pindot');

    const button = section.querySelector('button');

    button.addEventListener('click', () => {
        section.classList.add('transition', 'animate');
        setTimeout(() => {
            section.classList.add('animate-completed')
        }, 1000)
    })

});