import React from "react";
import "./Cardview.css";
import fontAwesome from "https://cdn.skypack.dev/font-awesome@4.7.0";
import Header from "../Header";
import Footer from "../Footer";
 function Cardview (){
    return(
      <div>

     
    
<Header/>
        
        <div className="container py-5">
  <div className="row justify-content-center">
    
    <div className="col-12 col-lg-4">
      <div className="card box-shadow mx-auto my-5" style={{width: "18rem"}}>
        <img src="https://nsm09.casimages.com/img/2021/06/26//21062602461725998217475200.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title card-view-headings">Anémone</h5>
          <hr/>
          <p className="card-text card-view-text">Some quick example</p>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <a href="" className="card-view-angar"><i className="fas fa-disease icon-spinner"></i></a>
      </div>
    </div>
    
    <div className="col-12 col-lg-4">
      <div className="card box-shadow my-5 mx-auto" style={{width: "18rem"}}>
        <img src="https://nsm09.casimages.com/img/2021/06/26//21062602461725998217475199.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title card-view-headings">Tulipe</h5>
          <hr/>
          <p className="card-text card-view-text">Some quick example</p>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,64L48,53.3C96,43,192,21,288,58.7C384,96,480,192,576,218.7C672,245,768,203,864,154.7C960,107,1056,53,1152,32C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <a href="" className="card-view-angar"><i className="fas fa-disease icon-spinner"></i></a>
      </div>
    </div>
   
    
    <div className="col-12 col-lg-4">
      <div className="card box-shadow mx-auto my-5" style={{width: "18rem"}}>
        <img src="https://nsm09.casimages.com/img/2021/06/26//21062602461725998217475198.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title card-view-headings">Lycoris</h5>
          <hr/>
          <p className="card-text card-view-text">Some quick example</p>
        </div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,181.3C672,149,768,107,864,112C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <a href="" className="card-view-angar"><i className="fas fa-disease icon-spinner"></i></a>
      </div>

    </div>
    
  </div>
</div>
  <Footer/>
</div>
        


    )
 }
 export default Cardview;
