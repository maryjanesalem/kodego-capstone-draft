import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaHome,
  FaPhone,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "../css/styles.scss";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-primary pt-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-3 mb-md-0">
              <h5 className="text-secondary">About Us</h5>
              <p>
              Welcome to GameHub - where the cool kids of the gaming world come to play! We're all about having fun and taking gaming to the next level. We've got all the latest and greatest games, as well as gaming products to help you level up. Join the party and let's play!
              </p>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <h5 className="text-secondary">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-primary" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" style={{}} to="/games">
                    Games
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" style={{}} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" style={{}} to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="row">
                <h5 className="text-secondary">Contact Us</h5>
                <ul className="list-unstyled">
                  <li>
                    <FaHome className="icon"></FaHome>123 Main Street, City,
                    State ZIP
                  </li>
                  <li>
                    <FaPhone className="icon"></FaPhone>(808) 808-8888
                  </li>
                  <li>
                    <FiMail className="icon"></FiMail>contact@gamehub.com
                  </li>
                </ul>
              </div>
              <div className="row">
                <ul className="list-unstyled d-flex flex-wrap justify-content-start fs-2 mb-0">
                  <li>
                    <Link to="/" className="text-primary mr-5">
                      <FaFacebook className="social-icon"></FaFacebook>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-primary">
                      <FaTwitter className="social-icon"></FaTwitter>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-primary">
                      <FaInstagram className="social-icon"></FaInstagram>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-primary">
                      <FaTwitch className="social-icon"></FaTwitch>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div>
              <ul className="list-unstyled d-flex flex-wrap justify-content-evenly mb-0">
                <li>
                  <Link className="text-primary" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" to="/">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" to="/">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" to="/">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-12">
              <p className="text-center text-primary">
                Copyright &copy; 2023 Gamehub WD-30 Group-8. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
