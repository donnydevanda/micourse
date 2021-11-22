import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import coursesAPI from "../api/courses";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListCourses from "../components/ListCourses";

function Courses({ data }) {
  const [Search, setSearch] = useState(() => "");
  const [SearchFocus, setSearchFocus] = useState(() => false);
  const [SearchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }));

  const selectWrapper = useRef(null);

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch("");
    }
  }

  let timeoutSearch = useRef(null);

  function handleSearch(e) {
    e.persist();
    setSearch(e.target.value);
    clearTimeout(timeoutSearch.current);
    timeoutSearch.current = setTimeout(() => {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null,
      });
      coursesAPI
        .all({ params: { q: e.target.value } })
        .then((res) => {
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          });
        })
        .catch((err) => {
          setSearchResponse({
            isLoading: false,
            isError: true,
            data: null,
          });
        });
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro | Courses</title>
      </Head>

      <section className="pt-10 z-30 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 z-0 w-full h-full bg-indigo-900" />
        <div className="absolute bottom-0 -mb-6 object-fill z-0 w-full flex justify-center items-center">
          <div className="px-4">
            <h1 className="text-6xl text-center text-white  my-4">Explore</h1>
            <h2 className="text-lg text-center text-white">
              Find Thousand of Courses from Many Experts.
            </h2>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                id="q"
                type="text"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!SearchFocus)}
                onBlur={() => setSearchFocus(!SearchFocus)}
                value={Search}
                placeholder={
                  SearchFocus
                    ? "Type Minimum of 3 Words"
                    : "Find Something Here ..."
                }
                className="bg-white focus:outline-none transition-all duration-200 focus:border-blue-500 border border-gray-400 px-4 py-3 w-full mt-6"
              />
              {Search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full"
                  style={{ top: 75 }}
                >
                  {SearchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {SearchResponse.isError && "Something is Wrong"}
                      {SearchResponse.data?.length > 0
                        ? SearchResponse.data?.map?.((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                              >
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <img
                                    src={item?.thumbnail ?? ""}
                                    alt={item?.name ?? "Course Name"}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h3 className="text-gray-900 text-lg">
                                    {item?.name ?? "Course Name"}
                                  </h3>
                                  <p className="text-gray-600">
                                    {item?.level ?? "Course Level"}
                                  </p>
                                  <Link
                                    href="/courses/[id]"
                                    as={`/courses/${item.id}`}
                                  >
                                    <a className="link-wrapped"></a>
                                  </Link>
                                </div>
                              </div>
                            );
                          })
                        : "No course found"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <Header />
      </section>
      <ListCourses data={data} />
      <Footer />
    </>
  );
}

Courses.getInitialProps = async () => {
  try {
    const data = await coursesAPI.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Courses;
