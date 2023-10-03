import { Box, Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useHistory, useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

const OrderCard = () => {
  const navigate=useNavigate() 

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">pant</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: S</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹188</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            <FiberManualRecordIcon
              sx={{ width: "15px", height: "15px" }}
              className="text-green-600 p-0 mr-2 text-sm"
            />
            <span>Delivered On Mar 03</span>
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>

          <div
            className="flex items-center text-blue-600 cursor-pointer"
          >
            <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
            <span>Rate & Review Product</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
