import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-700">
        The Dragon News
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        Journalism Without Fear or Favour
      </p>

      {/* Divider */}
      <div className="w-24 h-0.5 bg-primary my-6"></div>

      {/* 404 */}
      <h2 className="text-6xl font-bold text-error">404</h2>

      <p className="mt-3 text-gray-500">
        This page doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="btn btn-primary mt-6">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
