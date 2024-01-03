import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen p-10">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-10 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className=" font-bold sm:text-6xl">Video Player</h1>
          <p className="mt-6 mb-8 ml-1 text-xl sm:mb-12">
            With
            <p className="dark:text-violet-400 text-5xl">Face Detection</p>
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/home"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Upload Video
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/about"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="./logo.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
