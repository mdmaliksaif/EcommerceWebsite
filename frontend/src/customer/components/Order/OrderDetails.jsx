import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20 mt-5">
      <div>
        <h1 className='font-bold text-xl py-7'></h1>
        <AddressCard />
      </div>
<div  className='py-20'>
    <OrderTracking activeStep={3}/>
</div>

<Grid className='space-y-5' container >
  {[1,1,1,1,1].map((item)=><Grid item container  className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center",justifyContent:"space-between"}}>

<Grid item xs={6}>
  <div className='flex items-center space-x-4'>
    <img  className="w-[5rem] h-[5rem] object-cover object-top" src="https://images.unsplash.com/photo-1631541909061-71e349d1f203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
     alt="" />
     <div className='space-y-2 ml-5'>
      <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
      <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:pink</span><span>Size:S</span></p>
      <p>Seller:Saif & Company</p>
      <p>134$</p>
     </div>
  </div>
</Grid>


<Grid item >

<Box sx={{color:deepPurple[500]}}>
<StarOutlineIcon/>
<span>Rate & Review Product</span>
</Box>

</Grid>

</Grid>)}


</Grid>

    </div>
  );
}

export default OrderDetails