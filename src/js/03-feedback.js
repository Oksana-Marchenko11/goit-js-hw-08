import throttle from 'lodash.throttle';

const myForm = document.querySelector(".feedback-form");

let elem = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if ('email' in elem) myForm.elements.email.value = elem.email;
if ('message' in elem) myForm.elements.message.value = elem.message;

myForm.addEventListener('input', throttle(function (e) {
    elem[e.target.name] = e.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(elem));
}, 500));

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(elem);
    localStorage.removeItem('feedback-form-state');
    myForm.reset();
});