import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
            {/* Header Banner */}
            <header>
                <div className="browse container ">
                    <div className="">
                        <h1 className="text-white gameon">Get your game on!</h1>
                        <button type="button" className="btn btn-warning btn-lg">
                            <Link className="nav-link" to="/games">Browse Games</Link>
                        </button>
                    </div>
                </div>
            </header>

      {/* MAIN */}
      <main className="">
        <div className="container py-5">
          {/* Main > First Carousel */}
          <section className="for-carousel">
            <div className="container h-50 mt-5">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="images/banner1.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/banner2.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="images/banner3.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </section>

          {/* Main > New Release Games*/}
          <h1 className="my-5 text-secondary">New Release</h1>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img
                  src="images/games/console.jpg"
                  className="card-img-top"
                  alt="Game 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Game 1</h5>
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
                  <h5 className="card-title">Game 2</h5>
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
                  <h5 className="card-title">Game 2</h5>
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
                  <h5 className="card-title">Game 3</h5>
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

          {/* Main > Popular games */}
          <h1 className="my-5 text-secondary">Popular</h1>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img
                  src="images/games/console.jpg"
                  className="card-img-top"
                  alt="Game 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Game 1</h5>
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
                  <h5 className="card-title">Game 2</h5>
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
                  <h5 className="card-title">Game 2</h5>
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
                  <h5 className="card-title">Game 3</h5>
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

          {/* Browse Game Mid Main */}
          <section>
            <div className="container text-end my-5">
              <div className="">
                <h1 className="text-warning">
                  Discover your new favorite game!
                </h1>
                <button type="button" className="btn btn-warning btn-lg">
                  <Link className="nav-link" to="/games">
                    Shop Games
                  </Link>
                </button>
              </div>
            </div>
          </section>


        </div>

        {/* Wide banner for mid page */}
        <section className="container-fluid my-5 wide-banner-mid">
          {/* <img src="images/header2.png" alt="" /> */}

        </section>




        <div className="container ">

          {/* Main > Second Carousel */}
          <section>
            <div className="container h-50 pt-5 mt-5">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/banner2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/banner3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/banner1.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </section>

          {/* Latest Gaming Products */}
          <h1 className="my-5 text-secondary">Latest Gears</h1>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img
                  src="images/games/console.jpg"
                  className="card-img-top"
                  alt="Game 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Gear 1</h5>
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
                  <h5 className="card-title">Gear 2</h5>
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
                  <h5 className="card-title">Gear 2</h5>
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
                  <h5 className="card-title">Gear 3</h5>
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

          {/* Browse Gears Main */}
          <section className="mb-5">
            <div className="container text-end my-5">
              <div className="margin-bot8">
                <h1 className="text-warning">
                  Play like a champ with our gears!
                </h1>
                <button type="button" className="btn btn-warning btn-lg">
                  <Link className="nav-link" to="/gears">
                    Shop Gears
                  </Link>
                </button>
              </div>
            </div>
          </section>

        </div>



      </main>
    </div>
  );
};

export default Main;
