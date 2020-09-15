do {
var a = prompt('Mencari Bilangan Ganjil / Genap');
    if (a == "") {
        alert('Harap masukkan angka -,-');
    } else if (a % 2 == 0) {
        alert(a + ' adalah bilangan Genap');
    } else if (a % 2 == 1) {
        alert(a + ' adalah bilangan Ganjil');
    }
    if (a != "") {
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

