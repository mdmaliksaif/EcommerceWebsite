
const ratingService = require('../services/ratingService');

const createRating= (req, res) => {
  try {
    const user = req.user
     
    
    const rating = ratingService.createRating(reqBody, user);
    
    res.status(202).send(rating);
  } catch (error) {
    res.status(500).send ({ error: 'Something went wrong' });
  }
};

// const getAllRatings= (req, res) => {
//     const productId=req.params.productId;
//     const user=req.user;
//     try {
 
//       const rating = ratingService.getAllRatings(productId);
      
//       res.status(202).send(rating);
//     } catch (error) {
//       res.status(500).send ({ error: 'Something went wrong' });
//     }
//   };


const getProductsRating=async (req, res) => {
  try {
    const productId = req.params.productId;
    const ratings =await ratingService.getProductsRating(productId);
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {getProductsRating,createRating}