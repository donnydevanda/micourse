import Link from "next/Link";
import Image from "next/image";
import IconPlay from "../../../public/images/ic-play.svg";
import formatThousand from "../../../helpers/formatThousand";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="item">
        <figure className="item-image">
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "Course-Thumbnail"}
          />
        </figure>
        <div className="item-meta mx-auto mt-4 flex items-center">
          <div className="w-1/5">
            <Image src={IconPlay} className="hover:scale-150" />
          </div>
          <div className="w-4/5">
            <h4 className="text-lg text-gray-900">
              {item?.name ?? "Course Name"}
            </h4>
            <h5 className="text-sm my-1 text-gray-600">
              {`Rp.${formatThousand(item?.price) ?? "Course price"}`}
            </h5>
            <Link href={`/course/${item.id}`}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
