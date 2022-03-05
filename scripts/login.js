//login
const TbUserName = document.querySelector('#tb-user');
const TbPassword = document.querySelector('#tb-pass');
const BtnLogin = document.querySelector('#btn-login');
const LoginUrl = 'https://rs-ticket-control.herokuapp.com/api/auth/login';



function login() {
    fetch(LoginUrl, {
        method: 'POST',
        body: JSON.stringify({
            user: TbUserName.value,
            pass: TbPassword.value
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(function(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function(data) {
        console.log(data);
    }).catch(function(error) {
        console.warn('Something went wrong.', error);
    });
}
//events
BtnLogin.addEventListener('click', login);