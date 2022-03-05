//login
const TbUserName = document.querySelector('#tb-user');
const TbPassword = document.querySelector('#tb-pass');
const BtnLogin = document.querySelector('#btn-login');
const LoginUrl = 'https://rs-ticket-control.herokuapp.com/api/auth/login';


function login() {
    fetch(LoginUrl, {
        method: 'POST',
        body: JSON.stringify({
            userName: TbUserName.value,
            password: TbPassword.value
        }),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(function(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function(userData) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('userRole', userData.user.role);
        goHome();
        console.log(userData);
    }).catch(function(error) {
        console.warn('Something went wrong.', error);
    });
}
//events
BtnLogin.addEventListener('click', (event) => {
    event.preventDefault();
});

BtnLogin.addEventListener('click', login);


//Go to go to Home
const goHome = () => {
    location.href = "../html/home.html";
}