// DATA AWAL
let buku = [
    {judul: "MATEMATIKA", harga: 65000},
    {judul: "BIOLOGI", harga: 70000},
    {judul: "STATISTIKA", harga: 69000},
    {judul: "BAHASA INDONESIA", harga: 85000}
];

// TAMPILKAN PRODUK
function tampilkanBuku() {
    let container = document.getElementById("produk-container");
    container.innerHTML = "";

    buku.forEach((item, index) => {
        container.innerHTML += `
            <div class="card">
                <h3>${item.judul}</h3>
                <p>Rp ${item.harga}</p>
                <button onclick="hapusBuku(${index})">Hapus</button>
            </div>
        `;
    });
}

// TAMBAH BUKU
function tambahBuku() {
    let judul = document.getElementById("judulBaru").value;
    let harga = document.getElementById("hargaBaru").value;

    if(judul && harga > 0){
        buku.push({judul, harga});
        tampilkanBuku();
    }
}

// HAPUS
function hapusBuku(index){
    buku.splice(index,1);
    tampilkanBuku();
}

// VALIDASI FORM
document.getElementById("formBeli").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let hp = document.getElementById("hp").value;
    let buku = document.getElementById("pilihBuku").value;
    let bayar = document.querySelector('input[name="bayar"]:checked');

    let valid = true;

    // reset error
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if(nama === ""){
        document.getElementById("errNama").innerText = "Nama wajib diisi";
        valid = false;
    }

    if(!email.includes("@")){
        document.getElementById("errEmail").innerText = "Email tidak valid";
        valid = false;
    }

    if(hp <= 0){
        document.getElementById("errHp").innerText = "Nomor harus positif";
        valid = false;
    }

    if(buku === ""){
        document.getElementById("errBuku").innerText = "Pilih buku";
        valid = false;
    }

    if(!bayar){
        document.getElementById("errBayar").innerText = "Pilih metode pembayaran";
        valid = false;
    }

    if(valid){
        alert("Pembelian berhasil!");
    }
});

// LOAD AWAL
tampilkanBuku();