import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-primary py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mb-3 mb-md-0">
              <h5 className="text-secondary">About Us</h5>
              <p>
                We are a game store that offers a wide variety of games for all
                types of gamers. Our mission is to provide the best possible
                gaming experience to our customers. We believe that gaming
                should be accessible to everyone, and we strive to make that a
                reality.
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
                  <Link className="text-primary" to="/">
                    Games
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-primary" to="/">
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
                    <i className="bi bi-geo-alt-fill me-2"></i>123 Main Street,
                    City, State ZIP
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill me-2"></i>(555) 555-5555
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill me-2"></i>info@gamehub.com
                  </li>
                </ul>
              </div>
              <div className="row">
                <ul className="list-unstyled d-flex flex-wrap justify-content-evenly fs-2 mb-0">
                  <li>
                    <Link to="/" className="text-primary">
                      <FaFacebook></FaFacebook>
                    </Link>
                  </li>
                  <li>
                    <Link to="/"  className="text-primary">
                        <FaTwitter></FaTwitter>
                    </Link>
                  </li>
                  <li>
                    <Link to="/"  className="text-primary">
                        <FaInstagram></FaInstagram>
                    </Link>
                  </li>
                  <li>
                    <Link to="/"  className="text-primary">
                      <FaTwitch></FaTwitch>
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
            {/* <div className="col-md-6">

                        </div> */}
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

    </div>
  );
};

export default Footer;
