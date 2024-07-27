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
          As a seasoned Frontend Developer, I bring a unique blend of technical
          expertise and philosophical insight to my work. My approach is
          grounded in a commitment to simplicity, efficiency, and mindfulness,
          influenced by my studies in philosophy and my dedication to living an
          intentional life.
          <br />
          <br />
          I am deeply passionate about continuous learning and personal growth,
          constantly seeking to enhance my technical skills and broaden my
          understanding of the digital landscape.
          <br />
          <br />
          My interests extend beyond the screen, encompassing a love for
          literature, music, and engaging with diverse ideas through podcasts
          and documentaries. I am an advocate for creating a more empathetic and
          fair society, believing strongly in the principles of truth, kindness,
          and mutual respect. In my professional interactions, I strive to
          embody these values, fostering collaborative and positive
          relationships with colleagues and clients alike.
          <br />
          <br />
          Driven by the principle of reciprocity, I believe in giving back what
          I receive, approaching each project and team interaction with
          fairness, empathy, and a willingness to understand and relate to
          diverse perspectives. This mindset not only enriches my personal life
          but also enhances my ability to connect with and contribute to diverse
          teams in the dynamic field of web development.
        </p>
      </div>
    </section>
  );
};

export default About;
