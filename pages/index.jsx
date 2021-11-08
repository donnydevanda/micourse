import Head from "next/head";

import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>MICOURSE</title>
      </Head>
      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
      </main>
    </>
  );
}
