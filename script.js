document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav');
  if(nav&&!nav.querySelector('a[href$="gallery.html"]')){
    const gallery=document.createElement('a');
    gallery.href='/gallery.html';
    gallery.textContent='Gallery';
    if(location.pathname.endsWith('/gallery.html')){
      gallery.classList.add('active');
      gallery.setAttribute('aria-current','page');
    }
    const community=[...nav.querySelectorAll('a')].find(link=>link.getAttribute('href')?.endsWith('community.html'));
    nav.insertBefore(gallery,community||null);
  }
  if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
});
