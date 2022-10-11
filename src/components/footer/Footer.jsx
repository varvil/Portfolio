import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                    <a href="#qualifications" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/villevarjus/" className="footer__social-link" targer="_blank">
                <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/ville-varjus-a83a69166/" className="footer__social-link" targer="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/varvil" className="footer__social-link" targer="_blank">
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="" className="footer__social-link" targer="_blank">
                <i class="uil uil-twitter-alt"></i>
            </a>
            </div>

            <span className="footer__copy"> &#169; Ville Varjus</span>
            <span className="footer__copy">ville.varjus(at)elisanet.fi</span>

        </div>
    </footer>
  )
}

export default Footer