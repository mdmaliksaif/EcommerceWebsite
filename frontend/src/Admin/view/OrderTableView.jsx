import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    FormControl,
    InputLabel,
    Menu,
    MenuItem,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
  import React, { useEffect, useState } from "react";
  
  import { useNavigate } from "react-router-dom";
  import { Grid, Select } from "@mui/material";
  // import { dressPage1 } from "../../../Data/dress/page1";
  import { useDispatch, useSelector } from "react-redux";
  import {
    confirmOrder,
    deleteOrder,
    deliveredOrder,
    getOrders,
    shipOrder,
  } from "../../state/Admin/Order/Action";
  import { configure } from "@testing-library/react";
  
  const OrdersTable = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ status: "", sort: "" });
    const [orderStatus, setOrderStatus] = useState("");
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { adminsOrder } = useSelector((store) => store);
    const [anchorElArray, setAnchorElArray] = useState([]);
  
    useEffect(() => {
      dispatch(getOrders({ jwt }));
    }, [jwt,adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed]);
  
    // useEffect(()=>{
    //   dispatch(getOrders({jwt}))
    // },[])
  
    const handleUpdateStatusMenuClick = (event, index) => {
      const newAnchorElArray = [...anchorElArray];
      newAnchorElArray[index] = event.currentTarget;
      setAnchorElArray(newAnchorElArray);
    };
   
    const handleUpdateStatusMenuClose = (index) => {
      const newAnchorElArray = [...anchorElArray];
      newAnchorElArray[index] = null;
      setAnchorElArray(newAnchorElArray);
    };
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setFormData({ ...formData, [name]: value });
    };
    function handlePaginationChange(event, value) {
      console.log("Current page:", value);
    }
  
    const handleConfirmedOrder = (orderId, index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(confirmOrder(orderId));
      setOrderStatus("CONFIRMED")
    };
  
    const handleShippedOrder = (orderId,index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(shipOrder(orderId))
      setOrderStatus("ShIPPED")
    };
  
    const handleDeliveredOrder = (orderId,index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(deliveredOrder(orderId))
      setOrderStatus("DELIVERED")
    };
  
    const handleDeleteOrder = (orderId) => {
      handleUpdateStatusMenuClose();
      dispatch(deleteOrder(orderId));
    };
  
    //   useEffect(()=>{
    // setUpdateOrderStatus(item.orderStatus==="PENDING"?"PENDING": item.orderStatus==="PLACED"?"CONFIRMED":item.orderStatus==="CONFIRMED"?"SHIPPED":"DELEVERED")
    //   },[adminsOrder.orders])
  
    return (
      <Box className="m-2">
        {/*  */}
        <Card className="mt-2">
          <CardHeader
            title="Recent Orders"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
           
           
          />
          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
  
                  <TableCell>Price</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {adminsOrder?.orders?.map((item, index) => (
                  <TableRow
                    hover
                    key={item.name}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  > 
                    <TableCell sx={{}}>
                    <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
        {item?.orderItems?.map((orderItem)=><Avatar  alt={item.title} src={orderItem.product?.imageUrl} /> )}
      </AvatarGroup>
                      {" "}
                    </TableCell>
  
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                          }}
                        >
                          {item?.orderItems.map((order) => (
                            <span className=""> {order.product?.title},</span>
                          ))}
                        </Typography>
                        <Typography variant="caption">
                          {item?.orderItems.map((order) => (
                            <span className="opacity-60">
                              {" "}
                              {order.product?.brand},
                            </span>
                          ))}
                        </Typography>
                      </Box>
                    </TableCell>
  
                    <TableCell>{item?.totalPrice}</TableCell>
                    <TableCell>{item?._id}</TableCell>
                    <TableCell className="text-white">
                      <Chip
                        sx={{
                          color: "white !important",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                        label={item?.orderStatus}
                        size="small"
                        color={
                          item.orderStatus === "PENDING" ? "info" :item?.orderStatus==="DELIVERED"? "success":"secondary"
                        }
                        className="text-white"
                      />
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      className="text-white"
                    >
                      {/* <Button>{item.orderStatus==="PENDING"?"PENDING": item.orderStatus==="PLACED"?"CONFIRMED":item.orderStatus==="CONFIRMED"?"SHIPPED":"DELEVERED"}</Button> */}
                      <div>
                        <Button
                          id={`basic-button-${item?._id}`}
                          aria-controls={`basic-menu-${item._id}`}
                          aria-haspopup="true"
                          aria-expanded={Boolean(anchorElArray[index])}
                          onClick={(event) =>
                            handleUpdateStatusMenuClick(event, index)
                          }
                        >
                          Status
                        </Button>
                        <Menu
                          id={`basic-menu-${item?._id}`}
                          anchorEl={anchorElArray[index]}
                          open={Boolean(anchorElArray[index])}
                          onClose={() => handleUpdateStatusMenuClose(index)}
                          MenuListProps={{
                            "aria-labelledby": `basic-button-${item._id}`,
                          }}
                        >
                          <MenuItem
                            onClick={() => handleConfirmedOrder(item?._id, index)}
                            disabled={item.orderStatus==="DELEVERED" || item.orderStatus==="SHIPPED" || item.orderStatus==="CONFIRMED"}
                          >
                            CONFIRMED ORDER
                            
                          </MenuItem>
                          <MenuItem
                          disabled={item.orderStatus==="DELIVERED" || item.orderStatus==="SHIPPED"}
                            onClick={() => handleShippedOrder(item._id, index)}
                          >
                            SHIPPED ORDER
                          </MenuItem>
                          <MenuItem onClick={() => handleDeliveredOrder(item._id)}>
                            DELIVERED ORDER
                          </MenuItem>
                        </Menu>
                      </div>
                    </TableCell>
                
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Card className="mt-2 felx justify-center items-center">
          <Pagination
            className="py-5 w-auto"
            size="large"
            count={10}
            color="primary"
            onChange={handlePaginationChange}
          />
        </Card>
      </Box>
    );
  };
  
  export default OrdersTable;