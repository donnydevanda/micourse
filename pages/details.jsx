import Head from "next/head";
import Youtube from "react-youtube";
import coursesAPI from "../api/courses";

function Details({ data }) {
  return (
    <>
      <Head>
        <title>Micourse - Details</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <Youtube
              videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            />
          </div>
        )}
      </section>
    </>
  );
}

Details.getInitialProps = async (props) => {
  // const { id } = props;
  try {
    const data = await coursesAPI.details(1);
    return { data: data };
  } catch (error) {
    return error;
  }
};

export default Details;
