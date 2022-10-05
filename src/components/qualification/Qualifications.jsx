import React from 'react'
import "./qualification.css";

const Qualifications = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">

                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"> Education</i>
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"> Experience</i>
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Engineer</h3>
                            <div className="span qualification__subtitle">VAMK, University of Applied Sciences, Vaasa</div>
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
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Media-assistant, Arts, Entertainment, and Media Management</h3>
                            <div className="span qualification__subtitle">Technical collage, Jyväskylä</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2016
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
                            <h3 className="qualification__title">Graduate</h3>
                            <div className="span qualification__subtitle">Gymnasium, Jyväskylä</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2016
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Service Desk Specialist</h3>
                            <div className="span qualification__subtitle">TietoEvry</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2022 - August 2022 (4 months)
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
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Service Desk Specialist</h3>
                            <div className="span qualification__subtitle">TietoEvry</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2021 - August 2021 (4 months)
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
                            <div className="span qualification__subtitle">Elisa, Enia Oyj</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> March 2018 - July 2018 (5 months)
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
                            <div className="span qualification__subtitle">DNA Oyj</div>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> September 2017 - December 2017 (4 months)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualifications