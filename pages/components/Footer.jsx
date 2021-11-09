import { useState } from "react";

import Link from "next/Link";

export default function Footer() {
  const [state, setState] = useState(() => "");

  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBER_PAGE_URL}/register?email=${state}`
    );
  }

  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Api Developer
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Career
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Our Story
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  New Soon
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Get Scholarship
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Path Skills
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Features
                </a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a className="text-gray-400 hover:text-teal-500 hover:underline">
                  Refund Policy
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-gray-400 leading-loose">
            Micro Center <br />
            Alleysi Block X No.12 <br />
            South Jakarta, Indonesia <br />
            12630
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-gray-400">
            Submit your email for special offers
          </p>
          <form onSubmit={submit}>
            <input
              type="email"
              onChange={(event) => setState(event.target.value)}
              className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
              placeholder="Your Email Address"
            />
            <button
              className="bg-yellow-600 hover:bg-yellow-500 transition-all duration-200 
          focus:outline-none shadow-inner text-white px-6 py-3"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 border-gray-800 text-center">
        <p className="text-gray-400">2021 Micourse. All Right Reserved.</p>
      </div>
    </footer>
  );
}
