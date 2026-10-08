document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu.addEventListener('click', () => { const open=links.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); });
document.querySelectorAll('.links a').forEach(link => link.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
// Resume PDF is bundled in the repository root as resume.pdf.
