import React,{ useState, useEffect } from "react";
import "./Cardviewrow.css";
import { shopData } from "./ShopData";
import styled from "@emotion/styled";

import useShop from "../ShopContext/ShopContext";

function Cardviewrow() {
    const array = [1,2,3,4,5,6]
    
const { products, addToCart, removeFromCart } = useShop();
const [isInCart, setIsInCart] = useState(false);

useEffect(() => {
  // const productIsInCart = products.find((product) => product.name === name);

  // if (productIsInCart) {
  //   setIsInCart(true);
  // } else {
  //   setIsInCart(false);
  // }
}, [products]);
const AddButton =  styled.div`
	background: ${(props) => (props.isInCart ? "#E55336" : "#60c95d")};
`
const handleClick = (e) => {
  console.log(e,'tis is the event')
	// const product = { name, imageUrl, price };

  if (isInCart) {
    // removeFromCart(product);
  } else {
    // addToCart(product);
  }
};
  return (
    <div className="container d-flex justify-content-center mt-50 mb-50 card-view-row">
      <div className="row">
        {shopData.map((data)=>{
            return(
             <div className="col-md-4 mt-2">
             <div className="card">
               <div className="card-body">
                 <div className="card-img-actions">
                   <img
                     src={data.imageUrl}
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
                       {data.name}
                     </a>
                   </h6>
   
                   <a href="#" className="text-muted" data-abc="true">
                    {data.name}
                   </a>
                 </div>
   
                 <h3 className="mb-0 font-weight-semibold">${data.price}</h3>
   
                 <div>
                   <i className="fa fa-star star"></i>
                   <i className="fa fa-star star"></i>
                   <i className="fa fa-star star"></i>
                   <i className="fa fa-star star"></i>
                 </div>
   
                 <div className="text-muted mb-3">34 reviews</div>
   
                 <AddButton isInCart={isInCart} onClick={() => handleClick(data)}>
	<p>{isInCart ? "-" : "+"}</p>
</AddButton>
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
