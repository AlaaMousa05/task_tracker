"use client";
import React from "react";
import { useRouter } from "next/navigation";  

interface ErrorProps {
  error: Error | null;  
  reset: () => void;
}

function Errors({ error, reset }: ErrorProps) {
  const router = useRouter();  

  const goHome = () => {
    router.push("/");  
  };

  const errorMessage = error ? error.message : "An unexpected error occurred";

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 space-y-6 p-6">
      <h1 className="text-4xl font-extrabold text-white text-center">Oops! Something went wrong</h1>
      <p className="text-lg text-white opacity-80 text-center">{errorMessage}</p>
      
      <div className="space-x-4 mt-6 flex flex-wrap justify-center w-full">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
        >
          Refresh Page
        </button>
        <button
          onClick={goHome}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition duration-300"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}

export default Errors;
