import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsService from "../services/Products.Service";
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: id,
    name: "",
    price: "",
    pictureUrl: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsService.getProductById(product.id);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    console.log(product);
    ProductsService.updateProduct(product, id)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b" id="inputProduct">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
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
            Picture Link
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
            onClick={updateProduct}
            className="rounded btn-success mx-4">
            Update
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;