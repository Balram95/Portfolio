import React, { Component } from 'react';
import style from './Main.module.scss';
// import axios from 'axios';

class Main extends Component {

  render() {

    return (
      <div className={style.Main}>
        <div className={style.Header}>
          <div className={style.content}>
            <h1>Hi, I’m Balram. Nice to meet you.</h1>
            <p>Since beginning my journey as a freelance designer nearly 8 years ago,
              I’ve done remote work for agencies, consulted for startups, and collaborated
              with talented people to create digital products for both business and consumer use.
              I’m quietly confident, naturally curious, and perpetually improving my chops.
            </p>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.box}>
            <div className={style.first}>
              <i className="far fa-edit"></i>
              <h5>Designer</h5>
              <p>I value simple content structure, clean design
              patterns, and thoughtful interactions.</p>
              <h6>Things I enjoy designing:</h6>
              <p>UX, UI, Web, Mobile, Apps</p>
              <h6>Design Weapons:</h6>
              <ul><li>Pen & Paper</li><li>Bootstrap</li><li>Scss</li><li>Canvas</li><li>SVG</li><li></li><li></li></ul>
            </div>
            <div className={style.second}>
              <i className="fas fa-code"></i>
              <h5>Front-end Developer</h5>
              <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
              <h6>Languages I speak:</h6>
              <p>JavaScript, HTML, CSS, Python</p>
              <h6>Dev hobbies:</h6>
              <ul><li>Angular JS</li><li>React JS</li><li>Node JS</li><li>GraphQL</li><li>Electron</li><li></li><li></li></ul>
            </div>
            <div className={style.three}>
              <i className="far fa-hourglass"></i>
              <h5>Before Anyone Else</h5>
              <p>I genuinely care about people, and love helping new designers work on their craft.</p>
              <h6>Where I Learn:</h6>
                <p>Designlab’s UX Academy</p>
                <h6>My Buddies:</h6>
                <ul><li>Atom</li><li>MongoDB</li><li>WebRTC</li><li>Git</li><li>MySQL</li><li>REST</li><li>Terminal</li></ul>
            </div>
          </div>
            <div className={style.Gap}>
            <div className={style.backgroundThing}>
            <h2>How can I help?</h2>

            <p>A front-end developer’s role is to combine design and business logic to
            achieve a user-facing product. To do this successfully, a wide skill set is necessary
            to produce a quality user experience
            that leads to meeting business goals. With my experience I can:</p>



      <h6>Create responsive websites that work on a wide range of devices
      Assist with production of clean and functional design
      Bridge communication gap between designers and developers
      Integrate your website into an easy to use content management system</h6>

  </div>
            </div>
            <div className={style.about}>
            <h1>My Work</h1>
              <div className={style.box_container}>
                <div className={style.box}>

                </div>
                <div className={style.box}>

                </div>
                <div className={style.box}>

                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
