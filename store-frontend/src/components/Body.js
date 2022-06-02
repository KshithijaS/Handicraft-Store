import React, { useState } from "react";
import ProductsService from "../services/Products.Service";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Body() {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        pictureUrl: "",
    });

    const addNotify = () => {
        toast.success("Product Added! Please refresh", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
        });
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    const saveProduct = (e) => {
        e.preventDefault();
        ProductsService.saveProduct(product)
            .then((response) => {
            addNotify();
            console.log(response);
            window.location.reload();
            })
            .catch((error) => {
            console.log(error);
            });
        reset();
    };

    const reset = (e) => {
        e.preventDefault();
        setProduct({
            id: "",
            name: "",
            price: "",
            pictureUrl: "",
        });
        
    };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b" id="inputProduct">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Product</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" id="label">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" id="label">
                    Price
                </label>
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" id="label">
                    Image Link
                </label>
                <input
                    type="text"
                    name="imageUrl"
                    value={product.pictureUrl}
                    onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button
                    onClick={saveProduct}
                    className="mx-4 rounded font-semibold py-2 px-10 btn-success">
                    Save
                </button>
                <button
                    onClick={reset}
                    className="rounded font-semibold py-2 px-6 btn-secondary">
                    Clear
                </button>
                </div>
            </div>
        </div>
    );
}