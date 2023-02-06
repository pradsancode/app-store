var db_PLN_Prabayar = [
    [
        "1",
        "Token 20.000",
        "Listrik",
        "21000",
        "-",
        "Voucher Isi Ulang Listrik Prabayar",
        "'https://armaonestore.webtoko.net/produk/token-20-000-1701210'"
    ],
    [
        "2",
        "Token 50.000",
        "Listrik",
        "51000",
        "-",
        "Voucher Isi Ulang Listrik Prabayar",
        "'https://armaonestore.webtoko.net/produk/token-50-000-1701213'"
    ],
    [
        "3",
        "Token 100.000",
        "Listrik",
        "101000",
        "-",
        "Voucher Isi Ulang Listrik Prabayar",
        "'https://armaonestore.webtoko.net/produk/token-100-000-1701217'"
    ],
    [
        "4",
        "Token 200.000",
        "Listrik",
        "201000",
        "-",
        "Voucher Isi Ulang Listrik Prabayar",
        "'https://armaonestore.webtoko.net/produk/token-200-000-1701218'"
    ],
    [
        "5",
        "Token 500.000",
        "Listrik",
        "501000",
        "-",
        "Voucher Isi Ulang Listrik Prabayar",
        "'https://armaonestore.webtoko.net/produk/token-500-000-1701221'"
    ],
    [
        "6",
        "Token 1.000.000",
        "Listrik",
        "501000",
        "-",
        "Voucher Isi Ulang Listrik Prabayar",
        "'https://armaonestore.webtoko.net/produk/token-1-000-000-1701223'"
    ]
];

let PLN_prabayar = '<div class="konten-produk">';
for (let i = 0; i < db_PLN_Prabayar.length; i++) {
    PLN_prabayar += '<div class="produk rounded shadow-sm row" onclick="beli(' + db_PLN_Prabayar[i][6] + ')"><div class="gambar"><img src="https://pradstorage.files.wordpress.com/2023/02/produk-pln-pra.png" alt=""></div><div class="detail"><p class="nama-produk">' + db_PLN_Prabayar[i][1] + '</p><p class="deskripsi-produk">' + db_PLN_Prabayar[i][5] + '</p></div></div>';
}
PLN_prabayar += '</div>';