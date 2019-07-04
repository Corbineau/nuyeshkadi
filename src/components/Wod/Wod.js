import React from 'react';
import './Wod.css';

function Bio() {
  return (
    <div className="content">
      <header>
        <h1>About Me</h1>
      </header>
      <div className="bio">
        <img className="bioimage" src="./images/Rabbit_hobbes.png" alt="me." />
        <p>
          I'm Rabbit Stoddard, and I do all the things, and also none of the things. I like chill, not writing bios, and you. Sometimes, I read tarot cards, run/play LARPS, create <a href="https://conlang.org/" target="_blank" rel="noopener noreferrer">conlangs</a>, illuminate manuscripts, and engage in other <a href="https://www.patreon.com/caudelac" target="_blank" rel="noopener noreferrer">secondary world fiction</a>, in addition to actual work.
        </p>
        <p>
          Currently, I am doing this <a href="https://bootcamp.pe.gatech.edu/coding/landing-ftpt/"
            target="_blank" rel="noopener noreferrer">coding bootcamp thang</a>, so that I can turn some of these ideas into browser games using javascript and Twine, as well as understand more of the development cycle and needs of developers. I a SAFE4 Agile Certified Scrum Master, which means I help make sure that coders can spend their time coding, instead of doing paperwork or answering questions about when they will be done coding. I have over 10 years of software experience in Agile environments, particulary with Agile transformation, using both Scrum and Kanban. It is a fun thing, and I enjoy it, but there is always more to learn.
        </p>
        <p className="resume" id="my-resume">
          <a href="./images/Rabbit_Stoddard_Resume2019.pdf" alt="They're pretty useful I think.">Resume</a> | <a href="https://github.com/Corbineau" alt="Code lives here.">Github</a> | <a href="https://www.linkedin.com/in/rabbitseagraves/" alt="the true test of humility.">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

export default Bio;