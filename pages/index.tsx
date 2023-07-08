import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '@/gambar/logo.jpg';

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
        <Image src={Logo} width={195} />
      </div>
    </div>
  )
}