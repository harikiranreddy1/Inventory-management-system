import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <h2>  Inventory List  </h2></Link>
        <Link className="navbar-brand" to="/homepage">
        <h2>  Home  </h2></Link>
    <form className="d-flex" role="search">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button> */}
      <Link className='btn btn-outline-light mx-4' to="/additems"> Add Item</Link>
    </form>
  </div>
</nav>

    </div>
  )
}

export default Navbar