import {instance} from './index';

async function ProductsService() {
    try {
      const response = await instance.get('/productsRoutes/products');
      return(response);
    } catch (error) {
      return(error);
    }
  }
  export default ProductsService;