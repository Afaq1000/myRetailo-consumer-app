import React, { useState, useEffect } from "react";
import OrdersService from "../../services/OrdresService";
import "./style-order.css";
import { Button ,Box} from "@material-ui/core";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
                      <h5>Delivery Date : {delivery_date}</h5>
                      <h5>Customer Id : {customer_id}</h5>
                      <h5>Order Type : {order_type}</h5>
                      <h5>Placed At : {placed_at}</h5>
                    </div>
                  </figure>
                );
              })}
           
          </div>
        </div>
      </>
    );
  }
};

export default Order;



// const Order = () => {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Delivery Date</TableCell>
//             <TableCell align="right">Customer Id</TableCell>
//             <TableCell align="right">Order Type</TableCell>
//             <TableCell align="right">Placed At</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.DeliveryDate}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Order;