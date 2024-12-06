const form = document.querySelector(".login-form");
const submit = (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const user = {};
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    user.email = email;
    user.password = password;
    console.log(user);
    form.reset()
};
form.addEventListener("submit", submit);