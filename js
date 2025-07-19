const burger = document.getElementById('burcer');
const sidebar = document.getElementById('sidebar');
const overlar = document.getElementById('overlar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');


sidebar.classList.toggle('active');
overlar.classList.toggle('active');
});

overlar.addEventListener('click', () => {
  burger.classList.remove('active');
  sidebar.classList.remove('active');
  overlar.classList.remove('active');
});
