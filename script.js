function validateForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let ageError = document.getElementById("ageError");

    let valid = true;

    name.classList.remove("error");
    email.classList.remove("error");
    age.classList.remove("error");

    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    let nameRegex = /^[A-Za-z\s]{9,50}$/;
    if (!nameRegex.test(name.value)) {
        name.classList.add("error");
        nameError.textContent = "Must contain 9-50 letters";
        valid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add("error");
        emailError.textContent = "Valid email required";
        valid = false;
    }

    let ageValue = parseInt(age.value);
    if (isNaN(ageValue) || ageValue < 16 || ageValue > 30) {
        age.classList.add("error");
        ageError.textContent = "Age 16-30 only";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }
}