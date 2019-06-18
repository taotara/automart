function classToggle() {
  const navs = document.querySelectorAll('.nav_items')
  
  navs.forEach(nav => nav.classList.toggle('nav-toggleShow'));
}

document.querySelector('.nav-toggle')
  .addEventListener('click', classToggle);