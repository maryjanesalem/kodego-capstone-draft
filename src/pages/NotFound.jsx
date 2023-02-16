import { Link } from 'react-router-dom'


const NotFound = () => {
  return (

    <div id='notFound-page'>

      <div className="error container-fluid">
      </div>

      <div className="container-fluid mx-auto">
        <button type="button" className="mx-2 btn btn-secondary btn-lg">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </button>
        <button type="button" className="mx-2 btn btn-warning btn-lg">
          <Link className="nav-link" to="/">Go Back Home</Link>
        </button>
      </div>



    </div>
  )
}

export default NotFound