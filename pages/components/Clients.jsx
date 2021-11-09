import Image from "next/image";

import iconAmazon from "../../public/images/ic-clients/ic-amazon.svg";
import iconFacebook from "../../public/images/ic-clients/ic-facebook.svg";
import iconGoogle from "../../public/images/ic-clients/ic-google.svg";
import iconMicrosoft from "../../public/images/ic-clients/ic-microsoft.svg";
import iconTesla from "../../public/images/ic-clients/ic-tesla.svg";

export default function Clients() {
  return (
    <div className="container mx-auto pt-28 flex justify-center items-center">
      <div className="w-1/6">
        <Image src={iconAmazon} alt="company-amazon" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image src={iconFacebook} alt="company-facebook" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image src={iconGoogle} alt="company-google" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <Image
          src={iconMicrosoft}
          alt="company-microsoft"
          className="mx-auto"
        />
      </div>
      <div className="w-1/6">
        <Image src={iconTesla} alt="company-tesla" className="mx-auto" />
      </div>
    </div>
  );
}
