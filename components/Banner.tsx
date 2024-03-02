'use client';

import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[120px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex">
          <Image
            src="/me_no_bg-2.png"
            height={300}
            width={300}
            alt="Tim Koprivnik"
          />
        </div>
        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-purple-500 to-purple-900 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Tim Koprivnik
        </div>
        <p className="text-md text-purple-500 my-5 max-w-[600px]">
          (FE) Web Developer.
          <span className="text-purple-900"> Philosopher.</span> Fitness Buff.
          <span className="text-purple-900"> Casual Gamer.</span> Tech
          Enthusiast.
          <span className="text-purple-900"> Psychology Aficionado.</span> Vocal
          Cultural Critic.
          <span className="text-purple-900"> Fellow Human.</span>
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open('mailto:t.koprivni@gmail.com')}
            className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
