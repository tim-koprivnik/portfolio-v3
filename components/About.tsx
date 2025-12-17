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
          Frontend Engineer, blending love for{' '}
          <span className="text-[#c4a0cb]">technology</span> with a{' '}
          <span className="text-[#c4a0cb]">philosophical mindset</span>.
          <br />
          <br />
          I'm committed to <span className="text-[#c4a0cb]">
            simplicity
          </span>, <span className="text-[#c4a0cb]">efficiency</span>,{' '}
          <span className="text-[#c4a0cb]">stoicism</span>, and{' '}
          <span className="text-[#c4a0cb]">lifelong learning</span> in every
          aspect of my life. Like{' '}
          <span className="text-[#c4a0cb]">Mark Manson</span>, I ignore 99% of
          life's noise, zeroing in on what matters most:{' '}
          <span className="text-[#c4a0cb]">personal growth</span>. Echoing{' '}
          <span className="text-[#c4a0cb]">Socrates</span>, I believe an
          unexamined life isn't worth living. As an{' '}
          <span className="text-[#c4a0cb]">introvert</span>, I cherish{' '}
          <span className="text-[#c4a0cb]">quiet reflection</span> and think
          most people talk too much. I love watching{' '}
          <span className="text-[#c4a0cb]">docuseries</span>, listening to{' '}
          <span className="text-[#c4a0cb]">podcasts</span>,{' '}
          <span className="text-[#c4a0cb]">reading books</span>,{' '}
          <span className="text-[#c4a0cb]">gaming</span>, going to the{' '}
          <span className="text-[#c4a0cb]">gym</span>, and playing{' '}
          <span className="text-[#c4a0cb]">sports</span>. I also believe
          humanity works too hard for money and material things we don't
          need—it's time we chase a{' '}
          <span className="text-[#c4a0cb]">higher purpose</span>.
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
