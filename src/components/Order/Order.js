import React, { useState, useEffect } from "react";
import OrdersService from "../../services/OrdresService";
import "./style-order.css";
import { Button, Box } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavBar } from "../NavBar";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter";
import styled from 'styled-components'

// const Order = () => {
//   const [orders, setOrders] = useState([]);
//   const [orderItems, setOrderItems] = useState([]);
//   const [tableData, setTableData] = useState(null);

//   const [flag, setFlag] = useState(false);

//   console.log(localStorage.getItem("x-auth-token"));
//   const getOrders = async () => {
//     const response = await OrdersService();
//     console.log(response.data.at(0));

//     setOrders(response.data.at(0));
//     setOrderItems(response.data.at(1));
//   };

//   function getorderItem() {
//     const data = orders.map((item, index) => {
//       return {
//         ...item,
//         ...orderItems[index],
//       };
//     });
//     setTableData(data);
//     console.log(tableData);
//   }

//   const removeToken = () => {
//     localStorage.removeItem("x-auth-token");
//     setFlag(false);
//   };


//   useEffect(() => {

//     getorderItem();
    
//     },[orders])

//   useEffect(() => {
//     if (localStorage.getItem("x-auth-token") != null) {
//       setFlag(true);
     
//       getOrders();

     
      
//     } else {
//       setFlag(false);
//     }
//     // getOrders();
//   }, []);
  
 
//   const btnstyle = { margin: "8px 0" };

//   // if (!flag) {
//   //   return (
//   //     <>
//   //       <h1>Not Signed In</h1>
//   //     </>
//   //   );
//   // } else  {
//     return (
//       <>
//         <NavBar />
//         <h1>Orders Lists</h1>
//         <Box textAlign="center">
//           <Button
//             type="button"
//             onClick={removeToken}
//             color="primary"
//             variant="contained"
//             style={btnstyle}
//           >
//             Sign Out
//           </Button>
//         </Box>

//         <div className="orders">
//           <div className="row">
//             {
                       

//             tableData.map((item) => {
//               const {
//                 _id,

//                 delivery_date,
//                 customer_id,
//                 order_type,
//                 placed_at,
//                 quantity,
//                 product_id,
//                 order_id
//               } = item;

//               return (
            

//                 <figure key={_id}>
//                   <div>
//                     <h5>Delivery Date : {delivery_date}</h5>
//                     <h5>Customer Id : {customer_id}</h5>
//                     <h5>Order Type : {order_type}</h5>
//                     <h5>Placed At : {placed_at}</h5>
//                     <h5>Order Id: {order_id}</h5>
//                     <h5>Product Id : {product_id}</h5>
//                     <h5>Quantity: {quantity}</h5>
//                   </div>
//                 </figure>
//               );
//             })
//           }
//           </div>
//         </div>
//       </>
//     );
//   // }
// };

// export default Order;

////////////////////////////////////////////////

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const [flag, setFlag] = useState(false);
  const Wrapper= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left= styled.div`
margin-left:20px;
`; 

const Right= styled.div`
margin-right:20px;
`;

  console.log(localStorage.getItem("x-auth-token"));
  const getOrders = async () => {
    const response = await OrdersService();
    console.log(response.data);

    setOrders(response.data);

  };

  const removeToken = () => {
    localStorage.removeItem("x-auth-token");
    setFlag(false);
  };

  useEffect(() => {
    if(localStorage.getItem("x-auth-token")!=null){

     setFlag(true);
     getOrders();
    }
    else{
      setFlag(false);
    }
    const unsub=getOrders();
    return unsub;
  }, []);

  const btnstyle = { margin: "8px 0" };

  if (!flag) {
    return (
      <>
        <NavBar/>
        <h1>Not Signed In</h1>
      </>
    );
  } else if (flag) {

  return (
    <>
    <NavBar/>
    
    <Wrapper>
        <Left>
        <h1>Orders Lists</h1>
        </Left>
        <Right>
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
        </Right>

        </Wrapper>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delivery Date</TableCell>
            <TableCell align="right">Customer Id</TableCell>
            <TableCell align="right">Order Type</TableCell>
            <TableCell align="right">Placed At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((items) => (
            <TableRow
              key={items.DeliveryDate}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {items.delivery_date}
              </TableCell>
              <TableCell align="right">{items.customer_id}</TableCell>
              <TableCell align="right">{items.order_type}</TableCell>
              <TableCell align="right">{items.placed_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <NewsLetter/>
    <Footer/>
    </>
  );
}
}

export default Order;
