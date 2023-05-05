// TOP BAR SLIDE

const navigation = document.querySelector('.nav-list');
const currentYear = document.querySelector('.current-year');

navigation.addEventListener('click', el => {
  el.preventDefault();
  if (el.target.classList.contains('nav-btn')) {
    let id = el.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  };
});

