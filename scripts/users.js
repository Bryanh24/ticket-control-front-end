const newBtn = document.querySelector('#new-btn');
const saveBtn = document.querySelector('#save-btn');
const backBtn = document.querySelector('#back-btn');
const searchBtn = document.querySelector('#search-btn');
const exitBtn = document.querySelector('#exit-btn');
const registerPanel = document.querySelector('#register-user-panel')
const searchPanel = document.querySelector('#search-user-panel')
const TBName = document.querySelector('#TbName');

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

//Save Button
saveBtn.addEventListener('click', () => {
//validate inputs
   if(TBName.textContent === ''){
    trowAlert('You need to fill the name.');
    return;
   }
});


let trowAlert = (message) => {
    alert(message);
};