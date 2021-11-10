import Head from "next/head";
import coursesAPI from "../api/courses";

function Details() {
  return (
    <>
      <Head>
        <title>Micourse - Details</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      ></section>
    </>
  );
}

Details.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await coursesAPI.details(id);
    console.log(data.data);
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Details;
