import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[850px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#c4a0cb] to-[#6d0f7d] text-xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center">
          I build and improve web and mobile apps. I like owning a feature from
          planning to delivery. I like work that is simple and finished.
          <br />
          <br />
          I studied philosophy and landed somewhere between pessimism and irony:
          nothing matters much in the grand scheme, and the fact that it
          doesn&apos;t matter doesn&apos;t matter either. So I try to do good
          work, stay curious, and not take myself too seriously.
          <br />
          <br />
          Outside work: the gym, sports, books, series, podcasts, the occasional
          game, and a lot of quiet.
        </p>
      </div>
    </section>
  );
};

export default About;
