import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hi! My name is Sara and I'm a Full Stack Web Devloper.</h1>
      <img src={coverImage} className="my-2" style={{ width: "35%" }} alt="cover" />
      <div className="my-2">
        <p>
        I come with over 15 years of experience in the I.T. industry. My experience & knowledge range from systems, networking, and telephony administration. I currently head the I.T. department as Director of Technology for a local Business Consulting & Coaching company. In my spare time I practice turntablism, prep for & participate in races around Texas, as well as spend quality time with my fiance' & two year old son. I currently attend UTSA's Coding Bootcamp to help service my mission of helping companies reach their goals and increase productivity through the use of automation and other various technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
