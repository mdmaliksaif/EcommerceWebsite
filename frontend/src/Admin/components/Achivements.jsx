import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'


const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
  })
  
  // Styled component for the trophy image
  const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
  })

const Achivements = () => {
  return (
    <Card sx={{ position: 'relative' }}>
    <CardContent>
    <Typography variant='h6' sx={{ letterSpacing: '0.25px' }}>
        Shop With Zosh
      </Typography>
      <Typography variant='body2' >Congratulations 😆 </Typography>
      
      <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
        420.8k
      </Typography>
      <Button size='small' variant='contained'>
        View Sales
      </Button>
      <TriangleImg />
      <TrophyImg alt='trophy' src='https://static.vecteezy.com/system/resources/previews/014/493/309/original/golden-trophy-for-the-winners-of-the-sport-achievement-award-concept-png.png' />
    </CardContent>
  </Card>
  )
}

export default Achivements