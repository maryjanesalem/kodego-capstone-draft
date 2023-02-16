import { Link } from 'react-router-dom'
import '../css/styles.scss'
import { FaUserAstronaut, FaShoppingCart } from "react-icons/fa";


const Header = () => {
    return (
        <div >

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">GameHub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/games">Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gears">Gears</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><FaShoppingCart></FaShoppingCart></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><FaUserAstronaut></FaUserAstronaut></Link>
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
                        <button type="button" className="btn btn-warning btn-lg">
                            <Link className="nav-link" to="/games">Browse Games</Link>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header