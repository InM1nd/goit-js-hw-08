import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(element) {
  formData[element.target.name] = element.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(element) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  element.preventDefault();
  element.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onSubmitForm(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return alert("Please fill all fields!");
  }

}

(function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
})();


