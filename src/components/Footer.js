import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a className="social-link" href="/">
          <AiFillFacebook size={35} color={"#808080"} />
        </a>
        <a className="social-link" href="/">
          <AiFillInstagram size={35} color={"#808080"} />
        </a>
        <a className="social-link" href="/">
          <AiFillTwitterSquare size={35} color={"#808080"} />
        </a>
        <a className="social-link" href="/">
          <AiFillYoutube size={35} color={"#808080"} />
        </a>
      </div>
      <ul className="member-footer-links">
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">
              Voice and Subtitle
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">
              Voice Description
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Help Center</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Gift Cards</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Media Center</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">
              Investor Relations
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">
              Job Oppurtunities
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Terms of Use</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Privacy</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Legal Provisions</span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">
              Cookie Preferences
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">
              Corporate Information
            </span>
          </a>
        </li>
        <li className="member-footer-link-wrapper">
          <a className="member-footer-link" href="/">
            <span className="member-footer-link-content">Contact Us</span>
          </a>
        </li>
      </ul>
      <div className="footer-service-code-wrapper">
        <button className="service-code-button">Service code</button>
      </div>
      <div className="footer-copyright">
          <span>© 1997-2021 Netflix, Inc. 2e6f7bcc-9d37-40a3-bf5d-98e65db4d725</span>
      </div>
    </footer>
  );
};

export default Footer;
