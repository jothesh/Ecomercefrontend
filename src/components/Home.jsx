import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <Header/>

        

        
<section class="section-main bg padding-y">
        <div class="container">

        <div class="row">
            <aside class="col-md-3">
                <nav class="card">
                    <ul class="menu-category">
                        <li>
                            <Link to={"card-view"}>
                            <a href="#" >Best clothes</a>
                            </Link>
                       </li>
                        <li>
                            <Link to={"cardview"}>
                            <a href="#">Automobiles</a>
                            </Link>

                            
                            </li>
                        <li><a href="#">Home interior</a></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Digital goods</a></li>
                        <li><a href="#">Online goods</a></li>
                    </ul>
                </nav>
            </aside> 
            <div class="col-md-9">
                <article class="banner-wrap">
                    <img src="assets/images/2.jpg" class="w-100 rounded" />
                </article>
            </div> 
        </div> 
        </div> 
        </section>
       
        <section class="section-name padding-y-sm">
        <div class="container">

        <header class="section-heading">
            <a href="#" class="btn btn-outline-primary float-right">See all</a>
            <h3 class="section-title">Popular products</h3>
        </header>

            
        <div class="row">
            <div class="col-md-3">
            <Link to={"product-view"} params={{ img: "assets/images/items/1.jpg" }}>
                
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/1.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Just another product name</a>

                        
                        <div class="price mt-1">$179.00</div> 
                    </figcaption>
                </div>
                </Link>

            </div> 
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/2.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Some item name here</a>
                        <div class="price mt-1">$280.00</div>
                    </figcaption>
                </div>
            </div> 
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/3.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Great product name here</a>
                        <div class="price mt-1">$56.00</div> 
                    </figcaption>
                </div>
            </div>
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/4.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Just another product name</a>
                        <div class="price mt-1">$179.00</div> 
                    </figcaption>
                </div>
            </div> 
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/5.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Just another product name</a>
                        <div class="price mt-1">$179.00</div>
                    </figcaption>
                </div>
            </div>
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/6.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Some item name here</a>
                        <div class="price mt-1">$280.00</div> 
                    </figcaption>
                </div>
            </div> 
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/7.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Great product name here</a>
                        <div class="price mt-1">$56.00</div> 
                    </figcaption>
                </div>
            </div> 
            <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                    <a href="#" class="img-wrap"> <img src="assets/images/items/9.jpg" /> </a>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">Just another product name</a>
                        <div class="price mt-1">$179.00</div> 
                    </figcaption>
                </div>
            </div> 
        </div>

        </div>
        </section>
      
        <section class="section-name padding-y bg">
        <div class="container">

        <div class="row">
        <div class="col-md-6">
            <h3>Download app demo text</h3>
            <p>Get an amazing app  to make Your life easy</p>
        </div>
        <div class="col-md-6 text-md-right">
            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
            <a href="#"><img src="assets/images/misc/appstore.png" height="40" /></a>
        </div>
        </div> 
        </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home