import Link from 'next/link';
import Head from 'next/head';

export default function Beranda() {
  const halaman = (event) => {
    alert("Anda sudah berada di halaman Home");
  }

  return (
    <div className='bg-home'>
      <Head>
        <title>Beranda</title>
      </Head>
      <div className="header-home">
        <ul>
          <li><Link href="#" onClick={halaman}>Home</Link></li>
          <li><Link href="/input">Pemesanan</Link></li>
          <li><Link href="/stok">Stok Barang</Link></li>
        </ul>
      </div>
      <div className="isi-home">
        <p style={{color: "#eb4b22", fontSize: "15px", lineHeight: "20px", fontFamily: "sans-serif", letterSpacing: "1px"}}>
          You don't need to touch up many times<br />
          when you see our powder, because it's <br />
          guaranteed to last a long time and won't <br />
          make your face gray all day long!<br /><br />
          Our products are guaranteed 100% original <br />
          and cheaper than other stores. Not satisfied? <br />
          We'll give you our money back!
        </p>
      </div>
    </div>
  )
}