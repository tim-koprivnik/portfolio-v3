import { socialIcons } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto pt-[50px] pb-8">
      <div className="pb-10 justify-center flex">
        {socialIcons.map((icon) => {
          return (
            <Link
              href={icon.link}
              rel="noopener noreferrer"
              target="_blank"
              key={icon.alt}
              className="z-[1]"
            >
              <Image
                src={icon.image}
                height={30}
                width={30}
                className="mx-5"
                alt={icon.alt}
              />
            </Link>
          );
        })}
      </div>
      <p className="text-[#c4a0cb] text-center text-sm">
        Created with Next.js, Typescript, and TailwindCSS
      </p>
    </div>
  );
};

export default Footer;
