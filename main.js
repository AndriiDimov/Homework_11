var login = document.querySelector('input[id="name"]');
var greetingMessage = 'Hello world';

function greeting(greetingMessage) {
    console.log(greetingMessage + ' ' + this.value);
}

setInterval(greeting.bind(login, greetingMessage), 2000);