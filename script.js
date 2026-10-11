
const toggle=document.getElementById('menuToggle');const nav=document.getElementById('navLinks');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕ Close':'☰ Menu'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰ Menu'}));const nowYear=new Date().getFullYear();document.getElementById('year').textContent=nowYear;const yearsExperience=Math.max(17,17+(nowYear-2026));document.querySelectorAll('[data-experience]').forEach(el=>el.textContent=yearsExperience);if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}


// Animated professional title rotation in the hero section.
const roleHost=document.querySelector('.hero-role-line');
if(roleHost){
  const roles=['AutoCAD Designer','Electrical Draftsman','CAD / GIS Specialist','Electrical Distribution Designer'];
  let roleIndex=0;
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const showRole=()=>{
    const role=document.createElement('span');
    role.className='role-swap';
    role.setAttribute('aria-live','polite');
    role.textContent=roles[roleIndex];
    const previous=roleHost.querySelector('.role-swap');
    if(previous) previous.replaceWith(role); else roleHost.appendChild(role);
    roleIndex=(roleIndex+1)%roles.length;
  };
  showRole();
  if(!reducedMotion) window.setInterval(showRole,2600);
}
