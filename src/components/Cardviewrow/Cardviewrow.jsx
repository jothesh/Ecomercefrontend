import React from "react";
import "./Cardviewrow.css";
function Cardviewrow() {
    const array = [1,2,3,4,5,6]
  return (
    <div className="container d-flex justify-content-center mt-50 mb-50 card-view-row">
      <div className="row">
        {array.map((e)=>{
            return(
             <div className="col-md-4 mt-2">
             <div className="card">
               <div className="card-body">
                 <div className="card-img-actions">
                   <img
                     src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
                     className="card-img img-fluid"
                     width="96"
                     height="350"
                     alt=""
                   />
                 </div>
               </div>
   
               <div className="card-body bg-light text-center">
                 <div className="mb-2">
                   <h6 className="font-weight-semibold mb-2">
                     <a href="#" className="text-default mb-2" data-abc="true">
                       Toshiba Notebook with 500GB HDD & 8GB RAM
                     </a>
                   </h6>
   
                   <a href="#" className="text-muted" data-abc="true">
                     Laptops & Notebooks
                   </a>
                 </div>
   
                 <h3 className="mb-0 font-weight-semibold">$250.99</h3>
   
                 <div>
                   <i className="fa fa-star star"></i>
                   <i className="fa fa-star star"></i>
                   <i className="fa fa-star star"></i>
                   <i className="fa fa-star star"></i>
                 </div>
   
                 <div className="text-muted mb-3">34 reviews</div>
   
                 <button type="button" className="btn bg-cart">
                   <i className="fa fa-cart-plus mr-2"></i> Add to cart
                 </button>
               </div>
             </div>
           </div>
            )

        })}
       
      </div>
    </div>
  );
}
export default Cardviewrow;
