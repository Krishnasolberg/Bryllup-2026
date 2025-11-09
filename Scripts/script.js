(function(){
  // Active nav by path
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a=>{
    const href = a.getAttribute('href').toLowerCase();
    if((path === '' && href.includes('index')) || href === path) a.classList.add('active');
  });
  // Simple mobile menu
  const btn = document.querySelector('[data-menu]'); const nav = document.querySelector('.nav');
  if(btn){ btn.addEventListener('click', ()=> nav.style.display = nav.style.display==='flex' ? 'none':'flex') }
  // Fake countdown (static layout)
  document.querySelectorAll('[data-num]').forEach(n => n.textContent = n.dataset.num || '0');
})();
