import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import ListCourses from "./components/ListCourses";
import ListCategories from "./components/ListCategories";
import Footer from "./components/Footer";
import coursesAPI from "../api/courses";

function Index({ data }) {
  return (
    <>
      <Head>
        <title>Micourse - Home</title>
      </Head>
      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
          <div className="sunshine max-w-full" />
          <Header />
          <Hero />
        </section>
        <Clients />
        <ListCourses data={data} />
        <ListCategories />
        <Footer />
      </main>
    </>
  );
}

Index.getInitialProps = async () => {
  try {
    const data = await coursesAPI.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Index;
