function tampilPLNAwal() {
    document.getElementById('btn-prabayar').classList.add('btn-danger');
    document.getElementById('btn-prabayar').classList.remove('btn-light');
    document.getElementById('produk-pln-pascabayar').classList.add('d-none');
    // document.getElementById('produk-kosong').innerHTML = '<div class="produk-kosong"><img src="https://pradstorage.files.wordpress.com/2023/02/produk.png" alt=""><p class="text-center">Silahkan masukan nomor meter / ID Pelanggan terlebih dahulu.</p></div>';
    document.getElementById('produk-pln-prabayar').innerHTML = PLN_prabayar;
    document.getElementById('produk-pln-pascabayar').innerHTML = PLN_pascabayar;
}

function tampilPLNPra() {
    document.getElementById('btn-prabayar').classList.add('btn-danger');
    document.getElementById('btn-prabayar').classList.remove('btn-light');
    document.getElementById('btn-pascabayar').classList.add('btn-light');
    document.getElementById('btn-pascabayar').classList.remove('btn-danger');
    document.getElementById('produk-pln-prabayar').classList.remove('d-none');
    document.getElementById('produk-pln-pascabayar').classList.add('d-none');
}

function tampilPLNPasca() {
    document.getElementById('btn-prabayar').classList.add('btn-light');
    document.getElementById('btn-prabayar').classList.remove('btn-danger');
    document.getElementById('btn-pascabayar').classList.add('btn-danger');
    document.getElementById('btn-pascabayar').classList.remove('btn-light');
    document.getElementById('produk-pln-prabayar').classList.add('d-none');
    document.getElementById('produk-pln-pascabayar').classList.remove('d-none');
}