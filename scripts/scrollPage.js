
export default function scrollPage() {
    document.addEventListener('DOMContentLoaded', (e) => {
        const all_links = document.querySelectorAll('nav a');

        all_links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetID = link.getAttribute('href').substring(1);
                const targetEl = document.getElementById(targetID);

                window.scrollTo({
                    top: targetEl.offsetTop,
                    behavior: 'smooth',
                });
            });
        });
    });
}