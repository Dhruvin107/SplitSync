const createTab = document.getElementById("create-tab");
const joinTab = document.getElementById("join-tab");
const createForm = document.getElementById("create-form");
const joinForm = document.getElementById("join-form");

createTab.addEventListener("click", () => {
    createTab.classList.add("active");
    joinTab.classList.remove("active");
    createForm.style.display = "block";
    joinForm.style.display = "none";
});

joinTab.addEventListener("click", () => {
    joinTab.classList.add("active");
    createTab.classList.remove("active");
    joinForm.style.display = "block";
    createForm.style.display = "none";
});

document.getElementById("logoutBtn").addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.clear();
    sessionStorage.clear();

    window.location.href = "index.html";
});
