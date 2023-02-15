
function App() {

  return (
    <>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GameHub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Header Banner */}
      <header>
        <div className="browse container ">
          <div className="">
            <h1 className="text-white gameon">Get your game on!</h1>
            <button type="button" className="btn btn-warning btn-lg">Browse Games</button>
          </div>
        </div>
      </header>



      {/* MAIN */}
      <main className="">
        <div className="container py-5">

          {/* Main > First Carousel */}
          <section className="for-carousel">
            <div className="container h-50 mt-5">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="images/banner1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/banner2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="images/banner3.png" className="d-block w-100" alt="..." />
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





          {/* Main > New Release Games*/}
          <h1 className="my-5 text-secondary">New Release</h1>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 1" />
                <div className="card-body">
                  <h5 className="card-title">Game 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 2" />
                <div className="card-body">
                  <h5 className="card-title">Game 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 3" />
                <div className="card-body">
                  <h5 className="card-title">Game 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 4" />
                <div className="card-body">
                  <h5 className="card-title">Game 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main > Popular games */}
          <h1 className="my-5 text-secondary">Popular</h1>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 1" />
                <div className="card-body">
                  <h5 className="card-title">Game 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 2" />
                <div className="card-body">
                  <h5 className="card-title">Game 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 3" />
                <div className="card-body">
                  <h5 className="card-title">Game 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card border-primary">
                <img src="images/games/console.jpg" className="card-img-top" alt="Game 4" />
                <div className="card-body">
                  <h5 className="card-title">Game 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-secondary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          {/* Browse Game Mid Main */}
          <section>
            <div className="container text-end my-5">
              <div className="">
                <h1 className="text-warning">Discover your new favorite game!</h1>
                <button type="button" className="btn btn-warning btn-lg">Browse Games</button>
              </div>
            </div>
          </section>

          {/* Main > Second Carousel */}
          {/* <section>
          <div className="container h-50 pt-5 mt-5">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/banner1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/banner2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="images/banner3.png" className="d-block w-100" alt="..." />
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
        </section> */}

        </div>


        {/* <section className="container-fluid my-5">
          <img src="images/banner-wide1.png" alt="" />
        </section> */}




      </main>








    </>
  )
}

export default App
