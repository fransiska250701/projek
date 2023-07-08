import Head from 'next/head';
import { useState,useEffect } from "react";
import axios from "axios";
import { stat } from "fs";

 
const koneksiKosmetik = axios.create({ 
  baseURL: "http://127.0.0.1:5000/api/kosmetik" 
});

export default function Beranda() {
  const [statenama, setNama] = useState("");
  const [statekode, setKode] = useState("");
  const [statejumlah, setJumlah] = useState("");
  const [statedeskrispi, setDeskripsi] = useState("");
  const [statenamabarang, setNamaBarang] = useState("");
  const [kosmetik, setKosmetik] =  useState(null);

  const handleSubmitEdit =  (event) => {
    event.preventDefault();
    const address = "/"+event.target.kode.value;
  
    const formData = {
      kode: event.target.kode.value,
      nama: event.target.nama.value,
      jumlah: event.target.jumlah.value,
      deskripsi: event.target.deskripsi.value,
      namaBarang: event.target.namaBarang.value
    }

    koneksiKosmetik
      .put( address,formData)
      .then((res) => {
        console.log(res);
        window.location.reload();
        alert("Data berhasil di ubah");
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  const handleEdit = (event) => {
    event.preventDefault();
    var kode = event.target.value;

    const mhsEdit =  kosmetik.filter((kosmetik) => {
      return kosmetik.kode == kode;
    });
    
    if(mhsEdit!=null){
      setNama(mhsEdit[0].nama);
      setKode(mhsEdit[0].kode);
      setJumlah(mhsEdit[0].jumlah);
      setDeskripsi(mhsEdit[0].deskripsi);
      setNamaBarang(mhsEdit[0].namaBarang);
    }
  }

  const handleDelete = (event) => {
    event.preventDefault();
    var kode = event.target.value;
    koneksiKosmetik.delete(`/${kode}`)
      .then(response => {
        console.log('Data berhasil dihapus:', response.data);
        window.location.reload();
        alert("Data berhasil di hapus");
        setKosmetik(
          kosmetik.filter((kosmetik) => {
            return kosmetik.kode !== kode;
          })
        )
      })
      
      .catch(error => {
        console.error('Gagal menghapus data:', error);
      })
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
    <div className='bg-home'>
      <Head>
        <title>List Barang</title>
      </Head>
      <div id="list-barang-home">
        <div className="kiri-list">
          <form id="formedit" onSubmit={handleSubmitEdit}> 
            <table border={0}>
              <tbody>
                
                <tr>
                  <td><input type="text" id="kode" value={statekode} style={{display: "none"}} name="kode"/></td>
                </tr>

                <br />
            
                <tr>
                  <td><label> nama pemesan:</label></td>
                  <td><input type="text" id="nama" value={statenama} name="nama" onChange={(e) => setNama(e.target.value)} /></td>
                </tr>

                <br />
            
                <tr>
                  <td><label> jumlah pesanan:</label></td>
                  <td><input type="text" id="jumlah" style={{resize: "none"}} value={statejumlah} name="jumlah"  onChange={(e) => setJumlah(e.target.value)} /></td>
                </tr>

                <br />

                <tr>
                  <td><label> deskripsi pesanan:</label></td>
                  <td><input type="text" id="deskripsi" style={{resize: "none"}} value={statedeskrispi} name="deskripsi"  onChange={(e) => setDeskripsi(e.target.value)} /></td>
                </tr>

                <br />

                <tr>
                  <td><label> barang pesanan:</label></td>
                  <td><input type="text" id="namaBarang" style={{resize: "none"}} value={statenamabarang} name="namaBarang"  onChange={(e) => setNamaBarang(e.target.value)} /></td>
                </tr>

                <br />

              </tbody>
            </table>
            <center>
              <input type="submit" />
            </center>
          </form>
        </div>
        <div className="kanan-list">
            <div className="list-daftar-barang">
                {kosmetik.map((data) => 
                    <ul>
                        <li style={{fontSize: "20px", fontWeight: "bold", fontFamily: "sans-serif", textAlign: "left", marginLeft: "8%", marginTop: "2%", letterSpacing: "1px", color: "#81d4f4"}}>{data.nama}</li>
                        <li style={{fontFamily: "sans-serif", fontSize: "15px", color: "#fff", textAlign: "left", marginLeft: "8%", marginTop: "5%", letterSpacing: "1px"}}>Nama Barang : <br />{data.namaBarang}</li>
                        <li style={{fontFamily: "sans-serif", fontSize: "15px", color: "#fff", textAlign: "left", marginLeft: "8%", marginTop: "5%", letterSpacing: "1px"}}>Jumlah Pesanan : {data.jumlah}</li>
                        <li style={{fontFamily: "sans-serif", fontSize: "15px", color: "#fff", textAlign: "left", marginLeft: "8%", marginTop: "5%", letterSpacing: "1px"}}>Deskripsi : <br/>{data.deskripsi}</li>
                        <li><button onClick={handleEdit} value={data.kode}>Edit</button><button style={{marginLeft: "5%", marginTop: "5%"}} onClick={handleDelete} value={data.kode}>Delete</button></li>
                    </ul>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}
}