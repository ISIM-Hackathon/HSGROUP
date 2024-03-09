import React from 'react'
import Signup from './Signup'
import Login from './Login'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ISIM-Hackathon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Food & Refreshment</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Report</a></li>
            <li><a className="dropdown-item" href="/">Lost&Found</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Addition Information</a></li>
          </ul>
        </li>
  

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary mx-1" type="submit">Search</button>
        <button type="button" class="btn btn-outline-primary mx-1" data-toggle="modal" data-target="#Login">Login</button>
        <button type="button" class="btn btn-outline-primary mx-1" data-toggle="modal" data-target="#Signup">Signup</button>
      </form>
    </div>
  </div>
</nav>
 <Login/>
 <Signup/>
    </div>
  )
}
