const newBtn = document.querySelector('#new-btn');
const saveBtn = document.querySelector('#save-btn');
const backBtn = document.querySelector('#back-btn');
const searchBtn = document.querySelector('#search-btn');
const exitBtn = document.querySelector('#exit-btn');
const registerPanel = document.querySelector('#register-company-panel')
const searchPanel = document.querySelector('#search-company-panel')


//Search Button
searchBtn.addEventListener('click', () => {
    registerPanel.classList.add('invisible');
    searchPanel.classList.remove('invisible');
    backBtn.classList.remove('invisible');
    newBtn.classList.add('invisible');
    searchBtn.classList.add('invisible');
    saveBtn.classList.add('invisible');

});

//Back button
backBtn.addEventListener('click', () => {
    registerPanel.classList.remove('invisible');
    searchPanel.classList.add('invisible');
    backBtn.classList.add('invisible');
    newBtn.classList.remove('invisible');
    searchBtn.classList.remove('invisible');
    saveBtn.classList.remove('invisible');
});