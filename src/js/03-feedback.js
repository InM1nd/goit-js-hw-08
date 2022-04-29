import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);


function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill all fields!');
  }

  console.log(email.value, message.value);
  localStorage.removeItem(KEY_STORAGE);
  form.reset();
}

function onFormData(event) {
  const parsedData = localStorage.getItem(KEY_STORAGE);
  const data = parsedData ? JSON.parse(parsedData) :{};
  const {elements: { email, message },
  }  = event.currentTarget;
  data.email = email.value;
  data.message = message.value;

  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
}

(function dataFromLocalStorage() {
  const parsedData = localStorage.getItem(KEY_STORAGE);
  if (parsedData) {
    const parseMessage = JSON.parse(parsedData);
    if (parseMessage) {
      Object.keys(parseMessage).forEach(key => {
        form.elements[key].value = parseMessage[key];
      });
    }
  }
})();


