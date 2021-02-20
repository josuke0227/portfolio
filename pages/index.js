import Head from "next/head";
import Footer from "../components/Footer";
import MainContents from "../components/MainContents";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yosuke Motosugi - Frontend developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <MainContents />
      <Footer />
    </>
  );
}
