document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const loginMessage = document.getElementById("loginMessage");

    // Menghapus pesan sebelumnya
    usernameError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";

    let valid = true;

    // Validasi username atau email
    if (username === "") {
        usernameError.textContent = "Username atau email wajib diisi.";
        valid = false;
    } else if (
        username.includes("@") &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)
    ) {
        usernameError.textContent = "Format email tidak valid.";
        valid = false;
    }
    // Validasi password
    if (password.trim() === "") {
        passwordError.textContent = "Password wajib diisi.";
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password minimal 8 karakter.";
        valid = false;
    }
    // Hasil validasi
    if (valid) {
        loginMessage.textContent =
            "Login berhasil divalidasi! Selamat datang ♡";
        loginMessage.className = "mt-3 text-center text-success";
    } else {
        loginMessage.textContent =
            "Silakan periksa kembali input kamu.";
        loginMessage.className = "mt-3 text-center text-danger";
    }
});