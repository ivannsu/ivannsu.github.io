# Todo-List Application
1.  User mengisi form input dengan data tentang apa yang akan ia lakukan hari ini.
2.  Ketika tombol `tambah` ditekan maka :
    - Mengambil koleksi data JSON terlebih dahulu
    - Buat Object sementara, kemudian isi dengan data user
    - Koleksi data JSON di push dengan Object sementara yang tadi kita buat
3.  Menampilkan data
    - Mengambil koleksi data JSON terlebih dahulu
    - Ambil satu persatu isi koleksi dengan looping
    - Buat elemen HTML penampung sementara, misal jika kita menggunakan tabel untuk
      menampilkan data, maka elemen HTML penampung sementara nya adalah `<tr>`
    - Isi penampung dengan data menggunakan teknik DOM
4.  Jika koleksi data kosong maka
    - Tampilkan 'tidak ada data'