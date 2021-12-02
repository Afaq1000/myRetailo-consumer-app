import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers:{
      "x-auth-token": localStorage.getItem('x-auth-token')
    }
  });

async function ProductsService() {
    try {
      const response = await instance.get('/productsRoutes/products');
      return(response);
    } catch (error) {
      return(error);
    }
  }
  export default ProductsService;