import React from 'react'

import PropTypes from 'prop-types'



export default function Navbar(props) {
    return (

        // Navbar

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.contact}</a>
                        </li>


                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}

<div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
</div> 
                </div>
            </div>
        </nav>

    )
}

// Use of props

Navbar.propTypes = {

    title: PropTypes.string, // set id earlier so that it will show error when ever we send s prop of defferent data type

    home: PropTypes.string
}

Navbar.defaultProps = { title: 'Hello' }  // default props works when we don't define any prop from our side