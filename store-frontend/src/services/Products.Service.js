import axios from "axios";

const PRODUCT_API_BASE_URL="http://localhost:8082/api/products";
class ProductService {
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    saveProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    deleteProduct(id) {
        return axios.delete(PRODUCT_API_BASE_URL + "/" + id);
    }

    getProductById(id) {
        return axios.get(PRODUCT_API_BASE_URL + "/" + id);
    }

    updateProduct(product, id) {
        return axios.put(PRODUCT_API_BASE_URL + "/" + id, product);
    }

}

export default new ProductService()