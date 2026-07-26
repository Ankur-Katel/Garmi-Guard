(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('gg_theme')||'light';
  root.setAttribute('data-theme',saved);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);localStorage.setItem('gg_theme',next)}));
  document.querySelectorAll('[data-menu-toggle]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('.mobile-nav')?.classList.toggle('open')));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
