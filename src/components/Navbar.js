import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'  


export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* Left side: Title + Links */}
        <div className="d-flex align-items-center">
          <a href="#" className="navbar-brand me-3">{props.title}</a>
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <a href="#" className={`nav-link btn btn-link text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                Home
              </a>
            </li>

            {/* <li className="nav-item me-3">
              <Link to="/about" className={`nav-link btn btn-link text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <button className={`nav-link btn btn-link text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                Contact
              </button>
            </li> */}
          </ul>
        </div>

        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
        </div>

      </div>
    </nav>
  )
}

// // ✅ Correct property name
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
// }

// Navbar.defaultProps = {
//   title: 'Set Title Here',
//   about: 'Set About Here',
// }
