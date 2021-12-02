import React, { useState, useEffect } from "react";
import OrdersService from "../../services/OrdresService";
import "./style.css";
import { Button ,Box} from "@material-ui/core";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [flag, setFlag] = useState(false);


  console.log(localStorage.getItem("x-auth-token"));
  const getOrders = async () => {
    const response = await OrdersService();
    setOrders(response.data);
  };

  const removeToken = () => {
    localStorage.removeItem("x-auth-token");
    setFlag(false);
  };

  useEffect(() => {
    if(localStorage.getItem("x-auth-token")!=null){

     setFlag(true);
    }
    else{
      setFlag(false);
    }
    getOrders();
  }, []);

  const btnstyle = { margin: "8px 0" };

  if (!flag) {
    return (
      <>
        <h1>Not Signed In</h1>
      </>
    );
  } else if (flag) {
    return (
      <>
        <h1>Orders Lists</h1>
        <Box textAlign="center">
          <Button
            type="button"
            onClick={removeToken}
            color="primary"
            variant="contained"
            style={btnstyle}
          >
            Sign Out
          </Button>
        </Box>

        <div className="orders">
          <div className="row">
            <ul>
              {orders.map((item) => {
                const {
                  _id,
                  delivery_date,
                  customer_id,
                  order_type,
                  placed_at,
                } = item;
                return (
                  <figure key={_id}>
                    <div>
                      <h4>{delivery_date}</h4>
                      <h5>{customer_id}</h5>
                      <p>{order_type}</p>
                      <p>{placed_at}</p>
                    </div>
                  </figure>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
};

export default Order;
