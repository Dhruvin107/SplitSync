
    document.getElementById("logoutBtn").addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "index.html";
    });