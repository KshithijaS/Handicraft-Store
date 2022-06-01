import React from 'react'
import './css/style.css'
import { useEffect, useState } from "react";
import productsService from '../services/Products.Service';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card() {
    const [products, setProducts] = useState([]);

    const deleteNotify = () => {
        toast.success("Product Deleted", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
        });
        
    }

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
            deleteNotify();
            if (products) {
                setProducts((prevElement) => {
                return prevElement.filter((product) => product.id !== id);
                });
            }
        });
      };

    return (
        <div className="container-fluid overflow-auto">
            <div class="row flex-nowrap">
            {products.map((product) => (
                    <div className="col-3 card shadow" key={product.id}>
                        <img className='card-img-top' src={product.pictureUrl} alt="" />
                        <div className='card-body align-items-stretch flex flex-col'>
                            <p className="card-title fs-4 fw-bolder">{product.name}</p>  
                            <p className="card-text fs-5">Rs.{product.price}</p>
                            <button
                                onClick={(e, id) => editProduct(e, product.id)}
                                className="btn-primary rounded mt-auto mb-2">
                                Edit
                            </button>
                            <ToastContainer/>
                            <button
                                onClick={(e, id) => deleteProduct(e, product.id)}
                                className="btn-danger rounded mt-auto">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            } 
            </div>
      </div>
    )
}