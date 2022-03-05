
const homeUrl = '../html/home.html';
const loginUrl = '../html/login.html';

const render = () => {
    debugger
    if (localStorage.getItem('token') === null) {
        navigate(loginUrl)
    } else {
      navigate(homeUrl)
    }
}

const navigate = (url) => {
    location.href = url;
}

render();