import { Grid } from "@mui/material";
import React from "react";
import Achivements from "./Achivements";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTableView from "../view/OrderTableView";
import ProductsTable from "./ProductsTable";
import ProductsTableView from "../view/ProductsTableView";

const DashBoard = () => {
  return (
    <div className="px-5">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achivements />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrdersTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductsTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
