var db_PLN_Pascabayar = [
    [
        "1",
        "PLN Pascabayar",
        "Tgihan PLN",
        "0",
        "-",
        "Bayar Tagihan Listrik PLN",
        "'https://armaonestore.webtoko.net/produk/pln-pascabayar-1701231'"
    ]
];

let PLN_pascabayar = '<div class="konten-produk">';
for (let i = 0; i < db_PLN_Pascabayar.length; i++) {
    PLN_pascabayar += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_PLN_Pascabayar[i][6] + ')"><div class="gambar"><img src="https://pradstorage.files.wordpress.com/2023/02/produk-pln-pasca.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_PLN_Pascabayar[i][1] + '</p><p class="deskripsi-produk">' + db_PLN_Pascabayar[i][5] + '</p></div></div>';
}
PLN_pascabayar += '</div>';