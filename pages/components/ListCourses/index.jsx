import Link from "next/link";
import RenderItem from "./RenderItem";

export default function listCourses({ data }) {
  return (
    <div className="container mx-auto pt-24">
      <div className="flex justify-between item-center">
        <div className="w-auto">
          <p className="text-lg text-gray-600">New Classes</p>
          <h2 className="text-2xl text-gray-900">
            Summer <span className="text-blue-500">Productive</span>
          </h2>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-base">
              View All Course
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.data?.length > 0 ? (
          data?.data?.map((item, index) => {
            return <RenderItem item={item} key={index} />;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </div>
  );
}
