'use client';

import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[120px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex">
          <Image
            src="/me-2024-no-bg.png"
            height={300}
            width={300}
            alt="Tim Koprivnik"
          />
        </div>
        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#c4a0cb] to-[#6d0f7d] z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Tim Koprivnik
        </div>
        <p className="text-md text-[#c4a0cb] my-5 max-w-[600px]">
          Frontend Engineer. Stoic. Gym Devotee. Casual Gamer. Tech & Psychology
          Enthusiast. Advocate for a Simple & Quiet Life.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open('mailto:t.koprivni@gmail.com')}
            className="z-[1] border-[0.1px] border-white bg-transparent cursor-pointer hover:bg-[#6d0f7d] text-white p-2 sm:pt-2 sm:px-5"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
