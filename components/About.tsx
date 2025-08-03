import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
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
          I’m committed to simplicity, efficiency, stoicism, and lifelong
          learning in every aspect of my life. Like Mark Manson, I ignore 99% of
          life’s noise, zeroing in on what matters most: personal growth.
          Echoing Socrates, I believe an unexamined life isn’t worth living. As
          an introvert, I cherish quiet reflection and think most people talk
          too much. I love watching docuseries, listening to podcasts, reading
          books, gaming, going to the gym, and playing sports. One day, I’ll
          rescue a dog from a shelter. I also believe humanity works too hard
          for money and material things we don’t need—it’s time we chase a
          higher purpose.
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
