import Link from "next/Link";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "../../public/images/logo.svg";

export default function Header({ onLight }) {
  const linkColor = onLight ? "text-gray-900" : "text-white";

  const router = useRouter();

  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

  const textCTA = router.pathname.indexOf("/login") > -1 ? "Register" : "Login";

  return (
    <header className="container mx-auto flex justify-between items-center">
      <Image src={Logo} />
      <ul className="flex">
        <li className="md:my-0">
          <Link
            href="/"
            className="text-white hover:text-blue-500 text-lg px-6 py-3"
          >
            <a
              className={[
                linkColor,
                "text-white hover:text-blue-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-blue-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Explore
            </a>
          </Link>
        </li>
        <li className="md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-blue-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Features
            </a>
          </Link>
        </li>
        <li className="md:my-0">
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-blue-500 text-lg px-6 py-3",
              ].join(" ")}
            >
              Blog
            </a>
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkCTA}
            className="bg-indigo-700 hover:bg-indigo-900 transition-all duration-200 text-white 
            hover:text-blue-500 text-lg px-6 py-3 ml-6"
          >
            {textCTA}
          </a>
        </li>
      </ul>
    </header>
  );
}
