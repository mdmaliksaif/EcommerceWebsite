// import { useTheme } from '@emotion/react';
import { Box, Toolbar, useMediaQuery, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, useTheme, Drawer, CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import  CreateProductForum  from './components/CreateProductForum';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import AdminDashBoard from './components/DashBoard';

const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
    { name: "Total Earnings", path: "/admin", icon: <DashboardIcon /> },
    { name: "Weekly Overview", path: "/admin", icon: <DashboardIcon /> },
    { name: "Monthly Overview", path: "/admin", icon: <DashboardIcon /> },
    { name: "Add Product", path: "/admin/product/create", icon: <DashboardIcon /> },
];

const Admin = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);
    const navigate = useNavigate();
    const drawerWidth = 240;
    // Define the handleLogout function
    const handleLogout = () => {
        // Handle logout logic here
    };



    const drawer = (
        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
               
                height:'100%',
            }}
        >
            {/* {isLargeScreen && <Toolbar />} */}
            <List>
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />} */}
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
            
             <ListItem  disablePadding>
                <ListItemButton>   
                  <ListItemIcon>
                   <AccountCircleIcon/>
                    </ListItemIcon>
                   <ListItemText>Account</ListItemText>
                   </ListItemButton>
                </ListItem>
                ))
            </List>

        </Box>
    );


    const handleSideBarViewInMobile = () => {
        setSideBarVisible(true);
      };
    
      const handleCloseSideBar = () => {
        setSideBarVisible(false);
      };

      const drawerVariant = isLargeScreen ? "permanent" : "temporary";

    return (
        <div>
          <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}  >
          <CssBaseline />
          <Drawer
            variant={drawerVariant}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                ...(drawerVariant === "temporary" && {
                  top: 0,
                  [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                    {
                      position: "fixed",
                      left: 0,
                      right: 0,
                      height: "100%",
                      zIndex: (theme) => theme.zIndex.drawer + 2,
                    },
                }),
              },
            }}
            open={isLargeScreen || sideBarVisible}
            onClose={handleCloseSideBar}
          >
            {drawer}
          </Drawer>
          
          <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <AdminDashBoard/>}></Route>
            <Route path="/product/create" element={<CreateProductForum/>}></Route>
            {/* <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route> */}
            <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            {/* <Route path="/customers" element={<Customers/>}></Route> */}
            {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}c
          </Routes>
         
        </Box>
          </Box>
        </div>
      );
        }      

export default Admin;
