export function validateForm() {
  const form = document.querySelector('form');
  const error = document.querySelectorAll('.error');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const btn = document.querySelector('.btn');
  const viewPassword = document.querySelector('.viewPassword');
  const regex = [
    {
      email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'E-mail inválido ou usúario inexistente.'
    }
  ]
  const regexEmail = regex[0].email;
  const regexEmailMessage = regex[0].message;


  function verify() {
    
    const emailValue = email.value;
    const passwordValue = password.value;

    if (passwordValue === '' || passwordValue === undefined || passwordValue === null) {
      error[1].textContent = regexEmailMessage;
      viewPassword.style.bottom = '2.6rem';
    } else {
      error[1].textContent = '';
      viewPassword.style.bottom = '1.5rem'
    }
    
  }


  viewPassword.addEventListener('click' || 'touch', () => {
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password'
    }
  })
  email.addEventListener('input', ({target}) => {
    if (target.value.length > 10 && !regexEmail.test(target.value)) {
      error[0].textContent = regexEmailMessage;
    } else {
      error[0].textContent = '';
    }
  });
  btn.addEventListener('click', verify);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  })

}