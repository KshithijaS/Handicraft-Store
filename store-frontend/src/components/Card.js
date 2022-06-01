import React from 'react'
import './css/slider.css'
import { useEffect, useState } from "react";
import productsService from '../services/Products.Service';

export default function Card() {
    const [products, setProducts] = useState([]);

    const init = () => {
        productsService.getProducts().then((response) => {
            console.log("Products loading");
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("Something went wrong", error);
        });
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div className="cards">
            {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.pictureUrl} alt="" />
                        <h2 className="productname">{product.name}</h2>  
                        <h3 className="price">{product.price}</h3>
                    </div>
                ))
            } 
      </div>
    )
}