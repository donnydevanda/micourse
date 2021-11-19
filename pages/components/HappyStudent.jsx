import Star from "./Star";

export default function HappyStudent({ data }) {
  return (
    <div className="mt-8">
      <Star value={data?.rating ?? 0} width={26} height={26}></Star>
      <p className="text-gray-600 mt-1">{data?.note ?? "Students Comment"}</p>
      <div className="flex items-center mt-4">
        <div className="">
          <img
            src={data?.users?.avatar ?? ""}
            alt={data?.users?.name ?? "Student Name"}
            className="object-cover w-12 h-12"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-gray-900">
            {data?.users?.name ?? "Student Name"}
          </h2>
          <h3 className="text-sm text-gray-900">
            {data?.users?.role ?? "Student Role"}
          </h3>
        </div>
      </div>
    </div>
  );
}
