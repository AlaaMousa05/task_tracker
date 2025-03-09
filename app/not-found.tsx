import React from 'react';
import Image from 'next/image';
import notfound from '@/public/notFaound.webp';
import Link from 'next/link';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 p-6">
      <Image
        src={notfound.src}
        alt="Not Found"
        width={400}
        height={400}
        className="rounded-lg shadow-lg mb-6"
        priority
      />
   
      <h1 className="text-4xl font-extrabold text-white mb-4">
        Oops! Page Not Found
      </h1>
  
      <p className="text-xl text-white opacity-80 mb-6">
        It seems like the page you are looking for doesn't exist.
      </p>
      
      <Link
        href="/"
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default Notfound;
