import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import Login from "./Login/Login";

function Header (){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return(
      <div>
           <header className="section-header">

<section className="header-main border-bottom">
    <div className="container">
<div className="row align-items-center">
    <div className="col-lg-2 col-4">
   Company Name
        
    </div>
    <div className="col-lg-6 col-sm-12">
        <form action="#" className="search">
            <div className="input-group w-100">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
            </div>
        </form>
    </div> 
    <div className="col-lg-4 col-sm-6 col-12">
        <div className="widgets-wrap float-md-right">
            <div className="widget-header  mr-3">
                <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                <span className="badge badge-pill badge-danger notify">0</span>
            </div>
            <div className="widget-header icontext">
                <a href="#" className="icon icon-sm rounded-circle border" onClick={showModal}><i className="fa fa-user"></i></a>
                <div className="text">
                    <span className="text-muted">Welcome!</span>
                    <div> 
                      
                      <a href="#"  onClick={showModal}>Sign in</a> |  

                   
                      <Link to={'login'}>

                        <a href="#"> Register</a>
                      </Link>


                    </div>
                </div>
            </div>

        </div> 
    </div> 
</div> 
    </div> 
</section>



<nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
  <div className="container">

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="main_nav">
      <ul className="navbar-nav">
          <li className="nav-item dropdown">
          <Link to={"/"}>
          <a className="nav-link" href="#">Home</a>


          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Supermarket</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Partnership</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Baby &amp Toys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fitness sport</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Clothing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Furnitures</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"> More</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Foods and Drink</a>
            <a className="dropdown-item" href="#">Home interior</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Category 1</a>
            <a className="dropdown-item" href="#">Category 2</a>
            <a className="dropdown-item" href="#">Category 3</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

</header>
  
        
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     <Login/>
      </Modal>

      </div>
     
    )
}
export default Header;