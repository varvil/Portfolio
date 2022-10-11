import React from 'react'
import "./about.css";
//import CV from "../../assets/CV.pdf";
import Info from './Info';
import profile from '../../assets/profile.jpg';
import CV from '../../assets/CV_Ville_Varjus.pdf';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={profile} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                Creative and positive male from Vaasa. 
                Technology enthusiast and a musician.
                Currently in my fourth and final year of studies towards a bachelors degree in Computer Sciences at 
                VAMK, University of Applied Sciences.
                <br/>
                <br/>
                Mainly interested in fields of Web development & Cyber security.
                </p>

                <a download="CV_Ville_Varjus" href={CV} className="button button--flex">
                Download CV
                </a>


            </div>
        </div>
    </section>
  )
}

export default About;