import React, { useState } from 'react';
import Contact from './Contact';
import About from './About';


const Navbar = () => {


  const RegisterFunction = () =>
  {
    <div>
      
    </div>

  };

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">ARIA'S CLOSET</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a id = "productId" className="nav-link" href="Products" >Products</a>
        </li>
        <li className="nav-item">
          <a id = "AboutId" className="nav-link" href="/About" >About</a>
        </li>
        <li className="nav-item">
          <a id = "ContactsId" className="nav-link" href="Contact" >Contact</a>
        </li>
      </ul>
      <div className="buttons">
          <button className ="btn">
             <a href="Login" className="btn btn-outline-dark ms-2" ><i className="fa fa-sign-in me-1">  
                 </i>Login</a> 
          </button>
          <button className ="btn">
             <a href="Register" className="btn btn-outline-dark ms-2" onClick = {RegisterFunction}><i className="fa fa-user-plus me-1">  
                 </i>Register</a> 
          </button>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;