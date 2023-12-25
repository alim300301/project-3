import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
    // Menampilkan halaman web
    return (
      <html lang="en">
        <Navbar />
        <head >
          <title>ACS Multi Technology</title>
        </head>
        <body >
        
          <header >
            <h1>ACS Multi Technology</h1>
            <h2>Perusahaan Teknologi Terpercaya</h2>
          </header>
  
          <section id="tentang-kami">
            <h2>Tentang Kami</h2>
            <p>
                ACS Multi Technology adalah perusahaan yang bergerak di bidang teknologi.
                Kami melayani jasa:
                <ul>
                    <li>Design Grafis</li>
                    <li>Cetak Undangan & Banner</li>
                    <li>Pemasangan Jaringan Internet</li>
                    <li>Service PC & Laptop</li>
                    <li>Penjualan Aksesoris & Sparepart PC</li>
                    <li>Pembuatan Aplikasi Berbasis Website ataupun Android</li>
                </ul>
            </p>
          </section>
  
          <section id="kontak-kami">
            <h2>Kontak Kami</h2>
            <p>
                ACS Multi Technology
                <ul>
                    <li>Alamat: Jl. Sumberwaung no.278</li>
                    <li>Telepon: 08123456789</li>
                    <li>Email: acsmultitechnology@gmail.com</li>
                </ul>
            </p>
          </section>
        
        </body>
      </html>
    );
};
  
  export default Home;