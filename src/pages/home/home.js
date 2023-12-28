import React from "react";
import Navbar from "../../components/Navbar";
import './style.css'
const Home = () => {
    // Menampilkan halaman web
    return (
      <html lang="en">
        <Navbar/>
        <body>
          <h1>ACS Multitechnology</h1>
          <h2>Perusahaan IT terpercaya</h2>

          <div class="about-us">
          <h2>Layanan Kami</h2>
          <p>Kami memberikan beberapa layanan yang akan mempermudah anda</p>
            <div class="tiles">
            <div class="tile">
              <h3>Perbaikan komputer Hardware dan software</h3>
              <p>Kami menyediakan layanan perbaikan komputer, termasuk perbaikan hardware dan software.</p>
              <i class="fas fa-wrench"></i>
            </div>
            <div class="tile">
              <h3>Pemasangan dan konfigurasi software</h3>
              <p>Kami dapat membantu Anda memasang dan mengkonfigurasi perangkat lunak baru di komputer .</p>
              <i class="fas fa-cogs"></i>
            </div>
            <div class="tile">
              <h3>Pemasangan dan konfigurasi hardware</h3>
              <p>Kami dapat membantu Anda memasang dan mengkonfigurasi perangkat keras baru di komputer .</p>
              <i class="fas fa-server"></i>
            </div>
            <div class="tile">
              <h3>Instalasi dan konfigurasi jaringan</h3>
              <p>Kami dapat membantu Anda menginstal dan mengkonfigurasi jaringan komputer .</p>
              <i class="fas fa-ethernet"></i>
            </div>
          </div>
          </div>

          <section id="testimonials">
            <h2>Testimonials</h2>
            <p> Berikut Beberapa testimonial dari pelanggan kami</p>
            <div className="container">
              <div className="testimonial">
                <h3>Arifin zainullah</h3>
                <h4>--Streamer--</h4>
                <p>Saya Pengguna internet dari ACS Multitechnology alhamdulillah streming saya selalu lancar</p>
              </div>
              <div className="testimonial">
                <h3>Chika nabila</h3>
                <h4>--Gamer--</h4>
                <p>Saya seorang gamer sejati, komputer saya sangat mumpuni setelah beli part di ACS Multitechnology</p>
              </div>
              <div className="testimonial">
                <h3>Agung Iswahyudi</h3>
                <h4>--Editor--</h4>
                <p>Setelah saya melakukan pemasangan aplikasi di ACS Multitechnology pekerjaan saya menjadi lebih mudah</p>
              </div>
            </div>
          </section>

          <div>
                <h2>Kontak Kami</h2>
                <ul>
                    <li>
                        <i>+62 823 3290 5500</i>
                    </li>
                    <li>
                        <i >jl. sumberwadung no.278</i>
                    </li>
                    <li>
                        <i >admin@acsmultitechnology.com</i>
                    </li>
                    <li>
                        <i>Website: www.acsmultitechnology.com</i>
                    </li>
                </ul>
                <footer>
                    <p>Copyright &copy; 2023 ACS Multitechnology</p>
                </footer>
            </div>
        </body>
        </html>
    );
};
  
  export default Home;