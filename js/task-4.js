const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerForm);

function handlerForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(data);

  event.currentTarget.reset();
}
