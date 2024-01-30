'use client';

import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/TK-120x120-no-bg.png"
            alt="Logo"
            width={120}
            height={120}
            className="hover:animate-slowspin mt-3"
          />
        </div>
        <div className="flex flex-row gap-5 mr-10">
          <div
            onClick={() => window.open('mailto:t.koprivnik@gmail.com')}
            className="z-[1] bg-transparent cursor-pointer hover:bg-purple-900 rounded-xl text-white p-2 sm:pt-2 sm:px-5"
          >
            Contact
          </div>
          <a
            href="/CV_Koprivnik_Tim.pdf"
            rel="noopener noreferer"
            target="_blank"
            aria-label="CV"
            className="z-[1] bg-transparent cursor-pointer hover:bg-purple-900 rounded-xl text-white p-2 sm:pt-2 sm:px-5"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
