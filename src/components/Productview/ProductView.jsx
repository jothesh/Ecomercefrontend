import React from "react";
import { Card } from 'antd';
import { Routes, Route, useParams } from 'react-router-dom';
export const ProductView = (props) =>{
    let {img}=useParams()
    console.log(img,"jjjjj")
    return(
        <div>
             <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>

        </div>

        
    )
}