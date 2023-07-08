import { useState,useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { stat } from "fs";
 
const koneksiKosmetik = axios.create({ 
  baseURL: "http://127.0.0.1:5000/api/kosmetik" 
});

export default function FormMahasiswa() {
  const [kosmetik, setKosmetik] =  useState(null);
   
  const handleSubmitAdd =  (event) => {  
    event.preventDefault();
    const formData = new FormData(event.target);
    koneksiKosmetik
      .post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log(res);
        window.location.href = "/list";
        alert("Selamat data berhasil di input");
      })

      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    async function getKosmetik() {
      const response = await koneksiKosmetik.get("/").then(function (axiosResponse) {
        setKosmetik(axiosResponse.data.data);
      })
        
      .catch(function (error) {   
        alert('error from kosmetik in api kosmetik: '+error);
      });
    }
    
    getKosmetik();
  }, []);

if(kosmetik==null){
  return(
    <div>
      waiting...
    </div>
  )
}else{
  return (
    <div className="input">
        <Head>
            <title>Input Barang</title>
        </Head>
        <div className="form-input" id="form-input">
          <form id="formadd" onSubmit={handleSubmitAdd} >
            <table border={0}>
              <tbody>
                
                <tr>
                  <td><label> nama pemesan:</label></td>
                  <td><input type="text" id="nama" name="nama" placeholder="Masukkan Nama Pemesan" /></td>
                </tr>

                <br />
            
                <tr>
                  <td><label> jumlah pesanan:</label></td>
                  <td><input type="text" id="jumlah" style={{resize: "none"}} name="jumlah" placeholder="Masukkan Jumlah Pesanan" /></td>
                </tr>

                <br />

                <tr>
                  <td><label> nama barang:</label></td>
                  <td><input type="text" id="namaBarang" style={{resize: "none"}} name="namaBarang" placeholder="Barang Yang Ingin Dibeli" /></td>
                </tr>

                <br />

                <tr>
                  <td><label> deskripsi pesanan:</label></td>
                  <td><input type="text" id="deskripsi" style={{resize: "none"}} name="deskripsi" placeholder="Masukkan Deskripsi Pesanan" /></td>
                </tr>

                <br />
              
              </tbody>
            </table>
            <center>
                <input type="submit" />
            </center>
          </form>
      </div>
    </div>
  )
}
}