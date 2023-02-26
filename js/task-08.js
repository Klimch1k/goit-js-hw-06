const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Будь ласка, заповніть всі поля форми");
  } else {
    console.log({
      email,
      password,
    });

    event.currentTarget.reset();
  }
}
