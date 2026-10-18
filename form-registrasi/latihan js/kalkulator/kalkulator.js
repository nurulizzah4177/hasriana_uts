function hitung(operator) {

    const angka1 =
        parseFloat(
            document.getElementById("angka1").value
        );

    const angka2 =
        parseFloat(
            document.getElementById("angka2").value
        );

    const hasil =
        document.getElementById("hasil");


    if (isNaN(angka1) || isNaN(angka2)) {

        hasil.textContent =
            "Masukkan angka yang valid!";

        return;
    }


    let jawaban;


    switch (operator) {

        case "+":
            jawaban = angka1 + angka2;
            break;

        case "-":
            jawaban = angka1 - angka2;
            break;

        case "*":
            jawaban = angka1 * angka2;
            break;

        case "/":

            if (angka2 === 0) {

                hasil.textContent =
                    "Tidak bisa dibagi 0";

                return;
            }

            jawaban = angka1 / angka2;

            break;
    }


    hasil.textContent = jawaban;
}


document
    .getElementById("btn-tambah")
    .addEventListener("click", function () {
        hitung("+");
    });


document
    .getElementById("btn-kurang")
    .addEventListener("click", function () {
        hitung("-");
    });


document
    .getElementById("btn-kali")
    .addEventListener("click", function () {
        hitung("*");
    });


document
    .getElementById("btn-bagi")
    .addEventListener("click", function () {
        hitung("/");
    });