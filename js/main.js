'use strict'
{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const overlay = document.querySelector('.overlay');
  
  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  const toTop = document.getElementById('to_top');
  

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothScrollLink of smoothScrollLinks) {
    smoothScrollLink.addEventListener('click', e => {
      e.preventDefault();

      const targetId = smoothScrollLink.hash;
      const targetElement = document.querySelector(targetId);
      const rectTop = targetElement.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      const buffer = 50;
      const targetTop = rectTop + offsetTop - buffer;
      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  }

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}