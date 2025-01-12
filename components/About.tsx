import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: 'scale(0.9' }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[850px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-[#c4a0cb] to-[#6d0f7d] text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Frontend Engineer, blending love for technology with a philosophical
          mindset.
          <br />
          <br />
          Committed to simplicity, efficiency, stoicism and continuous learning
          in all aspects of my life. As Mark Manson &apos;preaches&apos;, I
          don&apos;t give a f**k about most things in life, but I do give a
          strong f**k about values -- such as truth, honesty, integrity,
          respect, fairness, and freedom --, and people I care about the most.
          As Socrates, I strongly believe that &apos;the unexamined life is not
          worth living.&apos; I love watching psychological (docu)series,
          listening to podcasts, reading books, gaming, weightlifting, and
          playing sports. As an introvert, I believe people talk too much and
          that quietness is underrated. Once in my life, I want to save a dog
          from a shelter. What else... Yes... I also strongly believe that we
          work too much and that, as a species, it&apos;s about time we find
          some higher purpose than just having more money and material shit we
          don&apos;t even need.
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
