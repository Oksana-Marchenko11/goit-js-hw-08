var throttle = require('lodash.throttle');

const myForm = document.querySelector(".feedback-form");
// console.log(myForm)
let elem = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
// console.log(elem);
if ('email' in elem) {
    myForm.elements.email.value = elem.email;
}
if ('message' in elem) {
    myForm.elements.message.value = elem.message;
}

myForm.addEventListener('input', throttle(function (e) {
    // console.log(e.currentTarget.elements)
    const {
        elements: { email, message }
    } = e.currentTarget;

    elem[email.name] = email.value;
    elem[message.name] = message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(elem))
}, 500));

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
    myForm.reset();
});
