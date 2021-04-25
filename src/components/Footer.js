import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

import "./Footer.scss";

const Footer = () => {
  const footerTitles = [
    "Voice and Subtitle",
    "Voice Description",
    "Help Center",
    "Gift Cards",
    "Media Center",
    "Media Center",
    "Investor Relations",
    "Job Oppurtunities",
    "Terms of Use",
    "Privacy",
    "Legal Provisions",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Service code",
  ];

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
        {footerTitles.map((title) => {
          return (
            <li className="member-footer-link-wrapper">
              <a className="member-footer-link" href="/">
                <span className="member-footer-link-content">{title}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="footer-service-code-wrapper">
        <button className="service-code-button">Service code</button>
      </div>
      <div className="footer-copyright">
        <span>
          © 1997-2021 Netflix, Inc. 2e6f7bcc-9d37-40a3-bf5d-98e65db4d725
        </span>
      </div>
    </footer>
  );
};

export default Footer;
