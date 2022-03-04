sideBarURL = '../html/sidebar.html';

async function fetchSideBar() {
    const menu = await fetch(sideBarURL);
    return menu.text(menu);
}
fetchSideBar().then(() => {
    document.querySelector('#nav-placeholder').innerHTML = menu;
})

btnToggle.addEventListener('click', function() {
  sideBar.classList.toggle('active');
});