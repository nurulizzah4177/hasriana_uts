const form = document.getElementById("formRegistrasi");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const konfirmasi = document.getElementById("konfirmasi").value;

    if (nama === "" || email === "" || username === "" ||
        password === "" || konfirmasi === "") {

        pesan.textContent = "Semua kolom wajib diisi!";
        pesan.style.color = "red";

    } else if (!email.includes("@")) {

        pesan.textContent = "Email harus mengandung tanda @!";
        pesan.style.color = "red";

    } else if (password.length < 8) {

        pesan.textContent = "Password minimal 8 karakter!";
        pesan.style.color = "red";

    } else if (password !== konfirmasi) {

        pesan.textContent = "Password dan konfirmasi password tidak sama!";
        pesan.style.color = "red";

    } else {

        pesan.textContent = "Registrasi berhasil!";
        pesan.style.color = "green";

        form.reset();
    }
});