import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Youtube from "react-youtube";
import coursesAPI from "../api/courses";
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Feature from "./components/Details/Feature";
import CoursePhoto from "./components/Details/CoursePhoto";
import RenderPreview from "./components/Details/RenderPreview";
import HappyStudent from "./components/HappyStudent";
import Footer from "./components/Footer";
import IconStudent from "../public/images/ic-details/ic-student.svg";
import IconVideo from "../public/images/ic-details/ic-video.svg";
import IconCertificate from "../public/images/ic-details/ic-Certificate.svg";
import formatThousand from "../helpers/formatThousand";

function Details({ data }) {
  const footer = useRef(null);

  const [isSticky, setisSticky] = useState(() => true);

  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top;

    const stickyMetaToggler = () => {
      setisSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight);
    };

    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);

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
            in={isSticky}
            timeout={300}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white z-10 left-0 md:py-5">
              <div className="w-full md:w-3/4 md:mx-auto">
                <div className="flex items-center">
                  <div className="w-full ml-2 md:mx-auto">
                    <h2 className="text-gray-600 text-xs md:text-base">
                      Nama Kelas
                    </h2>
                    <h3 className="text-base md:text-2xl text-gray-900">
                      {data?.name ?? "Class Name"}
                    </h3>
                  </div>
                  <h5 className="text-base md:text-2xl text-teal-500 whitespace-no-wrap mr-4">
                    {data?.type === "free" ? (
                      "Free"
                    ) : (
                      <span>Rp.{formatThousand(data?.price ?? 0)}</span>
                    )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-600 transition-all  duration-200 focus:outline-none shadow-inner text-white px-12 py-3 whitespace-no-wrap"
                  >
                    {data?.type === "free" ? "Enroll" : "Buy"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>

        <div className="w-3/4 mx-auto mt-8">
          <div className="w-3/4">
            <section>
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                About <span className="text-blue-500">Courses</span>
              </h6>
              <p className="text-gray-500 text-lg leading-relax mb-3">
                {data?.description ?? "Class Description not Found"}
              </p>
            </section>
            <section className="mt-10">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Course <span className="text-blue-500">Photos</span>
              </h6>
              <div className="flex justify-start items-center -mx-4 mt-6">
                {data?.images?.length > 0 ? (
                  data?.images?.map?.((photo, index) => (
                    <CoursePhoto data={photo.image} key={index} />
                  ))
                ) : (
                  <div className="w-full">No Item Found</div>
                )}
              </div>
            </section>
            <section className="mt-10">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                You Will <span className="text-blue-500">Learn</span>
              </h6>
              {data?.chapters.length > 0 ? (
                <RenderPreview previews={data.chapters}></RenderPreview>
              ) : (
                <div className="w-full text-center py-12">No Chapter Found</div>
              )}
            </section>
            <section className="mt-10 w-2/3">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Our <span className="text-blue-500">Instructors</span>
              </h6>
              <div className="flex item-center">
                <img
                  src={data?.mentor?.profile ?? ""}
                  alt={data?.mentor?.name}
                  className="w-20 h-20 rounded-full overflow-hidden object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-large text-gray-900">
                    {data?.mentor?.name ?? "Mentor Name"}
                  </h2>
                  <h3 className="text-small text-gray-600">
                    {data?.mentor?.profession}
                  </h3>
                </div>
              </div>
            </section>
            <section className="mt-10 w-6/12">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Happy <span className="text-blue-500">Students</span>
              </h6>
              {data.reviews?.map?.((testimonial, index) => {
                return <HappyStudent key={index} data={testimonial} />;
              })}
            </section>
          </div>
        </div>
      </section>

      <section style={{ height: 2000 }}></section>

      <section ref={footer}>
        <Footer></Footer>
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
