
function App() {

  return (
    <>
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

      <header>
        <div className="browse container">
          <h1 className="text-white gameon">Get your game on!</h1>
          <button type="button" class="btn btn-warning">Browse Here</button>
        </div>

      </header>





      <section className="for-carousel">
        <div className="container h-50 mt-5">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="banner1.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="banner2.png" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="banner1.png" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </section>



      <main class="container py-5">

        <h1 class="my-5 text-secondary">New Release</h1>


        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card border-primary">
              <img src="console.jpg" class="card-img-top" alt="Game 1" />
              <div class="card-body">
                <h5 class="card-title">Game 1</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="btn btn-secondary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card border-primary">
              <img src="console.jpg" class="card-img-top" alt="Game 2" />
              <div class="card-body">
                <h5 class="card-title">Game 2</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="btn btn-secondary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card border-primary">
              <img src="console.jpg" class="card-img-top" alt="Game 3" />
              <div class="card-body">
                <h5 class="card-title">Game 2</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="btn btn-secondary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="card border-primary">
              <img src="console.jpg" class="card-img-top" alt="Game 4" />
              <div class="card-body">
                <h5 class="card-title">Game 3</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" class="btn btn-secondary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>


        <h1 class="my-5 text-secondary">Popular</h1>


<div class="row">
  <div class="col-md-6 col-lg-3 mb-4">
    <div class="card border-primary">
      <img src="console.jpg" class="card-img-top" alt="Game 1" />
      <div class="card-body">
        <h5 class="card-title">Game 1</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="btn btn-secondary">Buy Now</a>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-3 mb-4">
    <div class="card border-primary">
      <img src="console.jpg" class="card-img-top" alt="Game 2" />
      <div class="card-body">
        <h5 class="card-title">Game 2</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="btn btn-secondary">Buy Now</a>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-3 mb-4">
    <div class="card border-primary">
      <img src="console.jpg" class="card-img-top" alt="Game 3" />
      <div class="card-body">
        <h5 class="card-title">Game 2</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="btn btn-secondary">Buy Now</a>
      </div>
    </div>
  </div>
  <div class="col-md-6 col-lg-3 mb-4">
    <div class="card border-primary">
      <img src="console.jpg" class="card-img-top" alt="Game 4" />
      <div class="card-body">
        <h5 class="card-title">Game 3</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" class="btn btn-secondary">Buy Now</a>
      </div>
    </div>
  </div>
</div>







      </main>








    </>
  )
}

export default App
