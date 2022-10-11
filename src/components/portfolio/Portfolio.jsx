import React from 'react'
import { useState } from 'react';
import "./portfolio.css";

//Imports of screenshots VIDEO
import zehn from "../../assets/video/zehn.jpg";
import zehn2 from "../../assets/video/zehn2.jpg";
import zehn3 from "../../assets/video/zehn3.jpg";
import relentless from "../../assets/video/relentless.jpg";
import sunny from "../../assets/video/sunny.jpg";
import inso from "../../assets/video/inso.jpg";
import sose from "../../assets/video/sose.jpg";
import sose2 from "../../assets/video/sose2.jpg";
import bixa from "../../assets/video/bixa.jpg";
import saihke from "../../assets/video/saihke.jpg";

//Imports of screenshots WEB
import first from "../../assets/Web/first.png";
import second from "../../assets/Web/second.png";
import third from "../../assets/Web/third.png";

//Imports of screenshots PROJECTS
import rjs from "../../assets/Projects/rjs.png";
import todo from "../../assets/Projects/todo.png";
import chmod from "../../assets/Projects/chmod.png";


const Portfolio = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    }
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My work</span>

      <div className="portfolio__container container grid">

        <div className="portfolio__content">
          <div>
            <i className="uil uil-globe portfolio__icons"></i>
            <h3 className="portfolio__title">Web Development</h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(1)}>
            View More 
          <i className="uil uil-arrow-right portfolio__button-icon"></i></span>

          <div className={toggleState === 1 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times porfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Web Development</h3>
              <p className="portfolio__modal_description">
                Here are my Web development projects. 
              </p>

              <ul className="portfolio__modal-services grid"></ul>

              <li className="portfolio__modal_service">
                  <a href='https://www.cc.puv.fi/~e1900513/old/index.html' className="portfolio__modal-info">
                    <img src={first} alt='' />
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.salliva.fi/etusivu.html' className="portfolio__modal-info">
                    <img src={second} alt='' />
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='#home' className="portfolio__modal-info">
                    <img src={third} alt='' />
                  </a>
                </li>

            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-video portfolio__icons"></i>
            <h3 className="portfolio__title">Video editing</h3>
          </div>

          <span className="portfolio__button " onClick={() => toggleTab(2)}>View More 
          <i className="uil uil-arrow-right portfolio__button-icon"></i></span>

          <div className={toggleState === 2 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times porfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Video editing</h3>
              <p className="portfolio__modal_description">
                Here are some of my works. Used to work as a freelancer, but I also worked with e-sports organizations. 
                You can find more from my Youtube channel.
              </p>

              <ul className="portfolio__modal-services grid"></ul>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=CmOCFNf_4Lc' className="portfolio__modal-info">
                    <img src={zehn} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=e1m_ELd_-EM' className="portfolio__modal-info">
                    <img src={zehn2} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=JuqFYMbcb44&ab_channel=w.' className="portfolio__modal-info">
                    <img src={zehn3} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=qfOw73BcoPI&ab_channel=w.' className="portfolio__modal-info">
                    <img src={relentless} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=SgGirFqR3XU&ab_channel=w.' className="portfolio__modal-info">
                    <img src={sunny} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=3gHmYqs2v7E&ab_channel=w.' className="portfolio__modal-info">
                    <img src={inso} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/shorts/O8gPJ9zmoOQ' className="portfolio__modal-info">
                    <img src={sose} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=gjU0N73Bh6I&ab_channel=w.' className="portfolio__modal-info">
                    <img src={sose2} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=7q-5CSzg9tI&ab_channel=w.' className="portfolio__modal-info">
                    <img src={bixa} alt='' /> 
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.youtube.com/watch?v=cbkHdj6N8oE&ab_channel=ao-oppilaitokset' className="portfolio__modal-info">
                    <img src={saihke} alt='' /> 
                  </a>
                </li>

            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-folder-check portfolio__icons"></i>
            <h3 className="portfolio__title">Projects</h3>
          </div>

          <span className="portfolio__button"onClick={() => toggleTab(3)}>View More 
          <i className="uil uil-arrow-right portfolio__button-icon"></i></span>

          <div className={toggleState === 3 ? "portfolio__modal active-modal" : "portfolio__modal"}>
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times porfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Projects</h3>
              <p className="portfolio__modal_description">
                Projects that I've done so far.
              </p>

              <ul className="portfolio__modal-services grid"></ul>

              <li className="portfolio__modal_service">
                  <a href='https://www.hmlsolutions.com/cloud13/rjs2000/' className="portfolio__modal-info">
                    <img src={rjs} alt='' />
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.cc.puv.fi/~e1900513/todo/' className="portfolio__modal-info">
                    <img src={todo} alt='' />
                  </a>
                </li>

                <li className="portfolio__modal_service">
                  <a href='https://www.cc.puv.fi/~e1900513/table.html' className="portfolio__modal-info">
                    <img src={chmod} alt='' />
                  </a>
                </li>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portfolio