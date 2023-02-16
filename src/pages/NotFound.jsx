import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div>
      Error 404
      Page Not Found
      <br /><br /><br /><br /><br />
      <button type="button" className="btn btn-secondary btn-lg">
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </button>
      <button type="button" className="btn btn-warning btn-lg">
        <Link className="nav-link" to="/">Go Back Home</Link>
      </button>


    </div>
  )
}

export default NotFound