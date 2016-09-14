class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
//document.body.appendChild(button);
var first = "hello";
var last = "world";
var name = `Your name is ${first} ${last}.`;
(function ($) {
    $("h2").text("Changed Back");
})(jQuery);