import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[70vh] py-16 px-6 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10">
        <span className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-300/40 blur-3xl animate-pulse" />
        <span className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-indigo-300/40 blur-3xl animate-pulse" />
        <span className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-300/40 blur-3xl animate-pulse" />
      </div>

      <span className="inline-block text-xs tracking-widest uppercase bg-black/5 text-gray-700 px-3 py-1 rounded-full mb-6">
        Oops!
      </span>

      <h1 className="mb-3 text-7xl md:text-9xl font-extrabold tracking-tight text-blue-700 drop-shadow">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">Page not found</h2>
      <p className="max-w-xl text-gray-600 mb-10">
        The page you’re looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 shadow-lg shadow-blue-700/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Go back home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
          >
            <path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-9.22 9.22a.75.75 0 0 1-1.06-1.06l9.22-9.22h-3.44a.75.75 0 0 1-.75-.75Z" />
            <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3H9a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 0-.75.75V21a.75.75 0 0 0 .75.75H19.5a.75.75 0 0 0 .75-.75V15a.75.75 0 0 1 1.5 0v6A2.25 2.25 0 0 1 19.5 23.25H5.25A2.25 2.25 0 0 1 3 21V5.25Z" />
          </svg>
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 border border-gray-200 hover:border-gray-300 px-6 py-3 font-semibold shadow-md backdrop-blur transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
        >
          Contact us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.917l-7.5 4.583a2.25 2.25 0 0 1-2.32 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.917V6.75" />
          </svg>
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Tip: Check the URL or use the navigation menu at the top.
      </p>
    </div>
  );
}

export default NotFound;
