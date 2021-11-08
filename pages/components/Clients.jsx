import Image from "next/image";

import iconAmazon from "../../public/images/ic-amazon.svg";
import iconFacebook from "../../public/images/ic-facebook.svg";
import iconGoogle from "../../public/images/ic-google.svg";
import iconMicrosoft from "../../public/images/ic-microsoft.svg";
import iconTesla from "../../public/images/ic-tesla.svg";

export default function Clients() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/6">
        <Image src={iconAmazon} className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image src={iconFacebook} className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image src={iconGoogle} className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image src={iconMicrosoft} className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image src={iconTesla} className="mx-auto" />
      </div>
    </div>
  );
}
