function validateForm(form) {
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return false;
    }
    return true;
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm(this)) return;

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    alert(`Login Successful!\nEmail: ${email}`);
    window.location.href = "user_home_page.html";
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateForm(this)) return;

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("registerEmail").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("registerPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        document.getElementById("confirmPassword").setCustomValidity("Passwords do not match");
        this.classList.add("was-validated");
        return;
    } else {
        document.getElementById("confirmPassword").setCustomValidity("");
    }

    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
});