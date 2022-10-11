import React from 'react'
import "./qualification.css";

const Qualifications = () => {
  return (
    <section className="qualification section" id="qualifications">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button 
                qualification__active button--flex">
                    <i className="uil uil-graduation-cap 
                    qualification__icon"></i> {" "}
                    Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i> {" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">

                <div className="qualification__content">

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Engineer</h3>
                            <span className="qualification__subtitle">VAMK, University of Applied Sciences, Vaasa</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Service Desk Specialist</h3>
                            <div className="qualification__subtitle">TietoEVRY</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2022 - August 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Service Desk Specialist</h3>
                            <div className="qualification__subtitle">TietoEVRY</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2021 - August 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Video Editor</h3>
                            <div className="qualification__subtitle">SkitLite</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> June 2016 - September 2019

                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Sales Negotiator</h3>
                            <div className="qualification__subtitle">Elisa, Enia Oyj</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> March 2018 - July 2018

                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Sales Negotiator</h3>
                            <div className="qualification__subtitle">DNA Oyj</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> January 2018 - March 2018

                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Media-assistant and Media Management</h3>
                            <div className="qualification__subtitle">Technical collage, Jyväskylä</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Graduate</h3>
                            <div className="qualification__subtitle">Gymnasium, Jyväskylä</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualifications