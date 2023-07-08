import { useState,useEffect } from "react";
import axios from "axios";
import Link from 'next/link';
import { stat } from "fs";

 
const koneksiKosmetik = axios.create({ 
  baseURL: "http://127.0.0.1:5000/api/kosmetik" 
});

export default function FormMahasiswa() {
  const [statenama, setNama] = useState("");
  const [statekode, setKode] = useState("");
  const [stateharga, setHarga] = useState("");
  const [statefoto, setFoto] = useState("");
  const [statedeskrispi, setDeskripsi] = useState("");
  const [kosmetik, setKosmetik] =  useState(null);

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;

    return [year, month, day].join('-');
  }
   
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
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmitEdit =  (event) => {
    event.preventDefault();
    const address = "/"+event.target.kode.value;
  
    const formData = {
      kode: event.target.kode.value,
      nama: event.target.nama.value,
      harga: event.target.harga.value,
      deskripsi: event.target.deskripsi.value
    }

  koneksiKosmetik
    .put( address,formData)
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    }); 
  }

  const handleDelete = (event) => {
    event.preventDefault();
    var kode = event.target.value;
    koneksiKosmetik.delete(`/${kode}`)
      .then(response => {
        console.log('Data berhasil dihapus:', response.data);
        window.location.reload();
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

  const handleEdit = (event) => {
    event.preventDefault();
    var kode = event.target.value;

    const mhsEdit =  kosmetik.filter((kosmetik) => {
      return kosmetik.kode == kode;
    });
    
    if(mhsEdit!=null){
      setNama(mhsEdit[0].nama);
      setKode(mhsEdit[0].kode);
      setHarga(mhsEdit[0].harga);
      setFoto(mhsEdit[0].foto);
      setDeskripsi(mhsEdit[0].deskripsi);
    }
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
    <div>
      <form id="formadd" onSubmit={handleSubmitAdd} >
        <table border={0}>
          <tbody>
            
            <tr>
              <td><label> kode:</label></td>
              <td><input type="text" id="kode" name="kode" /></td>
            </tr>
            
            <tr>
              <td><label> nama:</label></td>
              <td><input type="text" id="nama" name="nama" /></td>
            </tr>
        
            <tr>
              <td><label> Foto:</label></td>
              <td><input type="file" name="foto"/></td>
            </tr>
        
            <tr>
              <td><label> harga:</label></td>
              <td><input type="text" id="harga" style={{resize: "none"}} name="harga" /></td>
            </tr>

            <tr>
              <td><label> deskripsi:</label></td>
              <td><input type="text" id="deskripsi" style={{resize: "none"}} name="deskripsi" /></td>
            </tr>
          
          </tbody>
        </table>
        <input type="submit" />
      </form>  
      
      <form id="formedit" onSubmit={handleSubmitEdit}> 
        <table border={0}>
          <tbody>
            
            <tr>
              <td><label> kode:</label></td>
              <td><input type="text" id="nim" value={statekode} name="kode"/></td>
            </tr>
        
            <tr>
              <td><label> nama:</label></td>
              <td><input type="text" id="nama" value={statenama} name="nama" onChange={(e) => setNama(e.target.value)} /></td>
            </tr>
            
            <tr>
              <td><label> Foto:</label></td>
              <td><img src={statefoto} width="80"/></td>
            </tr>
        
            <tr>
              <td><label> harga:</label></td>
              <td><input type="text" id="harga" style={{resize: "none"}} value={stateharga} name="harga"  onChange={(e) => setHarga(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label> deskripsi:</label></td>
              <td><input type="text" id="deskripsi" style={{resize: "none"}} value={statedeskrispi} name="deskripsi"  onChange={(e) => setDeskripsi(e.target.value)} /></td>
            </tr>

          </tbody>
        </table>
        <input type="submit" />
      </form>  
      
      <br/>
      <br/>
      
      <p>Tabel Mahasiswa hasil get Local Nodejs</p>
      
      <table border={1}>
        <thead>
          <tr>
            <td><b>kode</b></td> 
            <td><b>Nama</b></td>
            <td><b>Foto</b></td>
            <td><b>Harga</b></td>
            <td><b>Deskripsi</b></td>
            <td colSpan={2}><b>Action</b></td>
          </tr>
        </thead>
        <tbody>
          {kosmetik.map((mhs) => 
            <tr>
              <td>{mhs.kode}</td>
              <td>{mhs.nama}</td>
              <td><img src={mhs.foto} width="80"/></td>
              <td>{mhs.harga}</td>
              <td>{mhs.deskripsi}</td>
              <td><button onClick={handleEdit} value={mhs.kode}>edit</button></td>
              <td><button onClick={handleDelete} value={mhs.kode}>delete</button></td>
            </tr>
          )}     
        </tbody>
      </table>
    </div>
  )
}
}