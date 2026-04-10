function validate(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const msgBox = document.getElementById('message');

  let message = '';
  if (email === '') {
    message = 'Please enter an email.';
    msgBox.style.color = 'red';
  } else if (pass === '') {
    message = 'Enter ur email password bruh 😒';
    msgBox.style.color = 'red';
  } else if (age === '') {
    message = 'NOW PLZ DO NOT ENTER WRONG AGE ‼⚠☢⚠☢⚠';
    msgBox.style.color = 'red';
  } else {
    message = 'Click on login to join the beautiful adventure of coding!';
    msgBox.style.color = 'green';
  }
  msgBox.innerHTML = message;
}
document.getElementById("loginForm").onsubmit = validate;


document.getElementById("email").oninput = () => validate({ preventDefault: () => {} });
document.getElementById("password").oninput = () => validate({ preventDefault: () => {} });
document.getElementById("age").oninput = () => validate({ preventDefault: () => {} });
