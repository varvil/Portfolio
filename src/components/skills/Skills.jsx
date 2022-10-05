import React from 'react'
import Webdev from './Webdev'
import Visualdesigner from './Visualdesigner'
import Cybersecurity from './Cybersecurity'

import "./skills.css";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            
            <Webdev />
            <Cybersecurity />
            <Visualdesigner />

        </div>
    </section>
  )
}

export default Skills