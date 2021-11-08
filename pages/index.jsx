import Head from "next/head";
import axios from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import ListCourses from "./components/ListCourses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Micourse - Home</title>
      </Head>
      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full"></div>
          <div className="container mx-auto">
            <Header />
            <Hero />
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients />
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data} />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(
      "https://micourse-api-gateway.herokuapp.com/courses"
    );
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
