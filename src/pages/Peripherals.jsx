import React from "react";
import { Link } from 'react-router-dom'


const Peripherals = () => {
  return (
    <div id="periperalsPage" className="topmargin32">
      {/* Start coding Below */}
      {/* For CSS: css>styles.css, code only at --- div#periperalsPage */}
      <div className="container py-5">
        <div className="topbanner"></div>

        <h1 className="my-5 text-secondary">All Peripherals</h1>

        <div>
          <ul className="pagination pagination-lg">
            <li className="page-item disabled">
              <Link className="page-link" to="">
                &laquo;
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                &raquo;
              </Link>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 1"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 2"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 3"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 4"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 1"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 2"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 3"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card border-primary">
              <img
                src="images/games/console.jpg"
                className="card-img-top"
                alt="Game 4"
              />
              <div className="card-body">
                <h5 className="card-title">Peripheral 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peripherals;
