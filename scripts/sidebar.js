const btnToggle = document.querySelector('.toggle-btn');
const sideBar = document.getElementById('sidebar');
const iconBtn = document.getElementById('icon-btn');

btnToggle.addEventListener('click', function() {
    sideBar.classList.toggle('active');
    iconBtn.classList.toggle('fa-times-circle');
    iconBtn.classList.toggle('fa-bars');
});
