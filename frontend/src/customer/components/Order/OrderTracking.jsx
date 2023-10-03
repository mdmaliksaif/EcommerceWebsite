import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
  "placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered"
]

const OrderTracking = ({ activeStep }) => {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                color: "#9155FD",
                fontSize: "16px", // Adjust the font size as needed
                fontWeight: "bold", // Add font-weight if desired
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default OrderTracking
