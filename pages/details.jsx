import Head from "next/head";
import Youtube from "react-youtube";
import coursesAPI from "../api/courses";
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Feature from "./components/Details/Feature";
import IconStudent from "../public/images/ic-details/ic-student.svg";
import IconVideo from "../public/images/ic-details/ic-video.svg";
import IconCertificate from "../public/images/ic-details/ic-Certificate.svg";
import formatThousand from "../helpers/formatThousand";

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
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Online Course</h3>
            <h4 className="text-6xl text-blue-500 font-semibold">
              {data?.name ?? "Class Name"}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <Feature
                icon={IconStudent}
                meta="Student"
                value={data.total_students}
              />
              <Feature
                icon={IconVideo}
                meta="Video"
                value={data.total_videos}
              />
              <Feature
                icon={IconCertificate}
                meta="Certificate"
                value={data.certificate ? "Available" : "-"}
              />
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            // in={isSticky}
            timeout={300}
            className="meta=price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white z-50 left-0 py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Class Name</h2>
                    <h3 className="text-2xl text-gray-900">
                      {data.name ?? "Class Name"}
                    </h3>
                    <h5 className="text-2xl text-teal-500 whitespace-no-wrap mr-4">
                      {data?.type === "free" ? (
                        "Free"
                      ) : (
                        <span>Rp.{formatThousand(data?.price ?? 0)}</span>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
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
