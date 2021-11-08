import Link from "next/Link";
import Image from "next/image";

import IconPlay from "../../../public/images/ic-play.svg";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="item">
        <figure className="item-image">
          <Image src={IconPlay} className="icon-circle" />
          <img src={item?.thumbnail ?? ""} alt={item?.name ?? "Image"} />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900">
            {item?.name ?? "Course Name"}
          </h4>
          <h5 className="text-sm text-gray-600">
            {item?.level ?? "Course level"}
          </h5>
        </div>
        <Link href={`/course/${item.id}`}>View</Link>
      </div>
    </div>
  );
}
