var name = document.querySelector('input[id="name"]');
var greetingMessage = 'Hello world';

function greeting(greetingMessage) {
    console.log(greetingMessage + ' ' + this.value);
}

setInterval(greeting.bind(name, greetingMessage), 2000);