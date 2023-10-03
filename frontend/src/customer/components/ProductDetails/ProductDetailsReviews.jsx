import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Rating } from '@mui/material';

const ProductDetailsReviews = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box >
            <Avatar sx={{ width: 48, height: 48, bgcolor: '#9155fd' }} className='mx-4 '>R</Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className='space-y-2 ' >
            <div>
              <p className='font-semibold text-lg'>Raam</p>
              <p className='opacity-70'>April 2, 2023</p>
            </div>
          </div>
            <Rating value={4.5} name='half-rating' readOnly precision={0.5} />
            <p >nice shirt I love this shirt</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsReviews;
