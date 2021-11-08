import Head from "next/head";
import Image from "next/image";

import Header from "./components/Header";

import Circle from "../public/images/circle-1.svg";

export default function Index() {
  return (
    <>
      <Head>
        <title>MICOURSE</title>
      </Head>
      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <Image
            src={Circle}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <div className="container mx-auto">
            <Header onLight></Header>
          </div>
        </section>
      </main>
    </>
  );
}
