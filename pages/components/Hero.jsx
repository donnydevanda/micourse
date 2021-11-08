import Image from "next/image";

import imgHero from "../../public/images/img-hero.jpg";

export default function Hero() {
  function submit() {}

  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-5xl text-white font-semibold mb-5">
          <span className="text-blue-300">The New</span> Way to
          <br />
          Achieve Good <span className="text-blue-300">Skills.</span>
        </h1>
        <p className="text-white font-light text-lg mb-8">
          We provide tons of pathskill that can you choose and focus on
        </p>
        <form onSubmit={submit}>
          <input
            type="email"
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

      <div className="w-1/2 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <Image src={imgHero} alt="ImageHero"></Image>
          </div>
          <div
            className="absolute z-10 bg-white py-3 px-4 mt-24"
            style={{ transform: "translateX(-50%)", width: 290 }}
          >
            <p className="text-gray-900 mb-2">Stressless learning, so fun!</p>
            <span className="text-gray-600">Alyssa, App Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
