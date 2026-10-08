document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu.addEventListener('click', () => { const open=links.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); });
document.querySelectorAll('.links a').forEach(link => link.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const resume = document.getElementById('resume-link');
resume.addEventListener('click',e=>{if(!document.body.dataset.resumeAdded){e.preventDefault();alert('Add your latest CV as resume.pdf in the website folder to enable this download.');}});
fetch('resume.pdf',{method:'HEAD'}).then(r=>{if(r.ok && (r.headers.get('content-type')||'').includes('pdf'))document.body.dataset.resumeAdded='true'}).catch(()=>{});
