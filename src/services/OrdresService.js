import {instance} from './index';
async function OrdersService() {
    try {
      const response = await instance.get('/orderRoutes/orders');
      return(response);
    } catch (error) {
      return(error);
    }
  }
  export default OrdersService;