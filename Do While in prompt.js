do {
var angka = prompt('Mencari Bilangan Ganjil / Genap');
    if (angka == "") {
        alert('Harap masukkan angka -,-');
    } else if (angka % 2 == 0) {
        alert(angka + ' adalah bilangan Genap');
    } else if (angka % 2 == 1) {
        alert(angka + ' adalah bilangan Ganjil');
    } else {
        var again = confirm('Apakah anda mau mencoba lagi ?');
        if (again != false) {
            var b = prompt('Mencari Terbesar / Terkecil dari bilangan sebelumnya');
            if (b != null) {
                if (a > b == 0) {
                    alert(b + ' Lebih besar dari ' + a);
                } else {
                    alert(b + ' Lebih kecil  dari ' + a);

                }
            }
        }
    }
} while (true)

