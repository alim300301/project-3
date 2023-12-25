
import Navbar from "../../components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
        <Navbar/>
      <h1>Curriculum Vitae</h1>
      <h2>Data Pribadi</h2>
      <ul>
        <li>Nama Lengkap: [Alim Sujito]</li>
        <li>Tempat, Tanggal Lahir: [Banyuwangi, 30 Maret 2001]</li>
        <li>Alamat: [Sempu Banyuwangi]</li>
        <li>Nomor Telepon: [082332905500]</li>
        <li>Email: [argum555@gmail.com]</li>
      </ul>
      <h2>Pendidikan</h2>
      <ul>
        <li>
          [Stikom PGRI Banyuwangi] - [Teknik Informatika]
        </li>
     </ul>
      <h2>Pengalaman Kerja</h2>
      <ul>
        <li>
          [NOC] di [ACS Multitechnology] - [2020] - [20xx]
        </li>
      </ul>
    </div>
  );
};

export default Contact;