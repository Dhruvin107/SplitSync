const sortSelect = document.getElementById("sortBy");
const tableBody = document.getElementById("expenseTable");
const balancesBody = document.getElementById("balances");
const settlementsBody = document.getElementById("settlements");
const contributionsBody = document.getElementById("contributions");

// Sorting functionality
sortSelect.addEventListener("change", () => {
    const rows = Array.from(tableBody.querySelectorAll("tr"));
    const type = sortSelect.value;

    rows.sort((a, b) => {
        const tdA = a.querySelectorAll("td");
        const tdB = b.querySelectorAll("td");

        if (type === "date") {
            return new Date(tdA[0].innerText) - new Date(tdB[0].innerText);
        }
        if (type === "amount") {
            return parseFloat(tdA[2].innerText) - parseFloat(tdB[2].innerText);
        }
        if (type === "name") {
            return tdA[1].innerText.localeCompare(tdB[1].innerText);
        }
    });

    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
    calculateBalances();
});

document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.clear();
    sessionStorage.clear();

    window.location.href = "index.html";
});
