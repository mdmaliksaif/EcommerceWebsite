import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';


const MainCarosel = () => {

// const navigate=useNavigate

const items = mainCaroselData.map((item) => (
    <img className="cursor-pointer" role="presentation" src={item.image} alt="" />
  ));
  

    return(
<AliceCarousel  className="-z-20"
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite

/>
)
    }
export default MainCarosel
