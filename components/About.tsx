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
        <p className="tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900 text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Frontend Developer, blending technical expertise with philosophical
          insight.
          <br />
          <br />
          Committed to simplicity, efficiency, and continuous learning in all
          aspects of my life. I don't give a f**k about most things in life, but
          what I do give a strong f**k about are truth, honesty, respect,
          fairness, freedom, and people I care the most about. My favourite
          quote is from Socrates: "The unexamined life is not worth living." My
          favourite music is "This Bitter Earth" from Dinah Washington. My
          favourite movie is Interstellar, and second-favourite is Pay it
          Forward. My favourite book is "The Subtle Art of Not Giving a F*ck" by
          Mark Manson. I love sports, especially weight-lifting and tennis. I'm
          a pretty good CS player. I like being quiet. Once in my life, I want
          to save a dog from a shelter. What else... Oh ... I also strongly
          believe that we work too much and that, as a species, we need to find
          some higher purpose than just money.
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
