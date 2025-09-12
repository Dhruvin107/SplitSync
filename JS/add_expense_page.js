document.getElementById("addBtn").addEventListener("click", () => {
    const expenseName = document.getElementById("expenseName").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const dateTime = document.getElementById("dateTime").value.trim();
    const type = document.getElementById("type").value.trim();

    if (expenseName === "" || amount === "" || dateTime === "" || type === "") {
        alert("All fields are required.");
        return;
    }
    if (parseFloat(amount) <= 0) {
        alert("Amount must be greater than zero.");
        return;
    }

    alert("Expense Added Successfully!");
    window.location.href = "user_expense_list_page.html";
});

document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.clear();
    sessionStorage.clear();

    window.location.href = "index.html";
});
