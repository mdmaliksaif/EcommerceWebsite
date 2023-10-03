import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Button } from '@mui/material';
const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-white text-center mt-8 pt-7' container sx={{bgcolor:"black",color:"white py-3"}}>
            <Grid item xs={12} sm={6} md={3} >
                <div>

               <Typography className='pb-3 ' variant='h6' gutterbottom>Company</Typography>
                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>About </Button>

                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>Blogs </Button>

                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Press </Button>
                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Jobs </Button>
                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Partners </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div>

               <Typography className='pb-3' variant='h6' gutterbottom>Solution</Typography>
                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>Marketing </Button>

                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>Analytics </Button>

                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Commerce </Button>
                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Insights</Button>
                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Support</Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div>

               <Typography className='pb-3' variant='h6' gutterbottom>Documentation</Typography>
                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>Guides </Button>

                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>API Status </Button>

                </div>
               
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <div>

               <Typography className='pb-3' variant='h6' gutterbottom>Legal</Typography>
                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>Claim</Button>

                </div>
                <div>
               <Button className='pb-3' variant='h6' gutterbottom>Privacy</Button>

                </div>
                <div>

               <Button className='pb-3' variant='h6' gutterbottom>Terms</Button>
                </div>
                

             
            </Grid>
            <Grid   className='pt-7 pb-5 ' item xs={12}>
                      <Typography variant='body2' component="p" align='center' className='border' bgcolor="white" color="black">
                             BrandsShop:"We Are Providing Quality Product With Reasonable Price" 
                      </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer