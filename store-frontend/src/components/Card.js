import React from 'react'
import './css/slider.css'
import { useEffect, useState } from "react";
import productsService from '../services/Products.Service';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const navigate = useNavigate();

    const editProduct = (e, id) => {
        e.preventDefault();
        navigate(`/editProduct/${id}`);
    };

    const deleteProduct = (e, id) => {
        e.preventDefault();
        productsService.deleteProduct(id).then((res) => {
          if (products) {
            setProducts((prevElement) => {
              return prevElement.filter((product) => product.id !== id);
            });
          }
        });
      };

    return (
        <div className="cards">
            {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.pictureUrl} alt="" />
                        <h2 className="productname">{product.name}</h2>  
                        <h3 className="price">{product.price}</h3>
                        <button
                            onClick={(e, id) => editProduct(e, product.id)}
                            className="btn-primary">
                            Edit
                        </button>
                        <button
                            onClick={(e, id) => deleteProduct(e, product.id)}
                            className="btn-danger">
                            Delete
                        </button>
                    </div>
                ))
            } 
      </div>
    )
}