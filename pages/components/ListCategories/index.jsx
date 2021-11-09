import Link from "next/Link";
import Image from "next/image";

import RenderItem from "./RenderItem";

export default function index() {
  const data = [
    {
      imageName: "/images/ic-business.svg",
      name: "Business Development",
      total: 241,
    },
    {
      imageName: "/images/ic-content.svg",
      name: "Content Creator",
      total: 1511,
    },
    {
      imageName: "/images/ic-customer.svg",
      name: "Customer Relationship",
      total: 127,
    },
    {
      imageName: "/images/ic-game.svg",
      name: "Game Development",
      total: 289,
    },
    {
      imageName: "/images/ic-product.svg",
      name: "Product Management",
      total: 1311,
    },
    {
      imageName: "/images/ic-travel.svg",
      name: "Travel Guidance",
      total: 303,
    },
  ];

  return (
    <>
      <div className="flex justify-between item-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Category</h2>
          <h3 className="text-xl text-gray-900">
            Explore & <span className="text-blue-500">Learn</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-sm">
              View All Course
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
