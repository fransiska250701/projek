import Head from 'next/head';
import Image from 'next/image';
import Bedak from '@/gambar/bedak.jpg';
import Eyeshadow from '@/gambar/eyeshadow.png';
import Handbody from '@/gambar/handbodyscarlett.jpg';
import Kuas from '@/gambar/kuas.jpg';
import Lipstik from '@/gambar/lipstik.jpg';
import Makeover from '@/gambar/makeover.jpg';
import Parfume from '@/gambar/Perfume.png';
import Pixy from '@/gambar/pixy.jpg';
import Safetonik from '@/gambar/safeTonik.jpeg';
import Wardah from '@/gambar/wardah.jpg';

export default function Beranda() {
  return (
    <div>
      <Head>
        <title>Stok Barang</title>
      </Head>
      <div className="isi-stok">
        <ul>
            <li>
                <Image src={Bedak} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Bedak</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Eyeshadow} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Eyes Shadow</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Handbody} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Handbody</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Kuas} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Kuas</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Lipstik} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Lipstik</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
        </ul>
        <br />
        <ul style={{marginTop: "7%"}}>
            <li>
                <Image src={Makeover} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Makeover</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Parfume} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Parfume</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Pixy} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Pixy</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Safetonik} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Safetonik</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
            <li>
                <Image src={Wardah} width={200} /><br />
                <h1 style={{fontSize: "18px", fontFamily: "sans-serif", marginTop: "4%"}}>Wardah</h1>
                <h1 style={{fontSize: "15px", fontFamily: "sans-serif", marginTop: "4%"}}>Harga : Rp.100.000</h1><br />
            </li>
        </ul>
      </div>
    </div>
  )
}