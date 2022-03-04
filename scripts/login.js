//login
const TbUserName = document.querySelector('#tb-user');
const TbPassword = document.querySelector('#tb-pass');
const BtnLogin = document.querySelector('#btn-login');
const LoginUrl = 'https://rs-ticket-control.herokuapp.com/api/auth/login';


function login(UserName, Password){
    //debugger;
    fetch(LoginUrl, {
        method: 'POST',
        body: JSON.stringify({
            user: UserName,
            pass: Password
        }),
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    }).then(function(response) {
        if (response.ok) {
            return response.json();
            console.log(response.json())
        }
        return Promise.reject(response);
    }).then(function(data) {
        console.log(data);
    }).catch(function(error) {
        console.warn('Something went wrong.', error);
    });
}

//events
BtnLogin.addEventListener(onclick, login(TbUserName.textContent, TbPassword.textContent));