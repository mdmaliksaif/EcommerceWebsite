import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectioncard from '../HomeSectioncard/HomeSectioncard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
// import { kurtaPage1 } from '../../../Data/woman/kurta';

const HomeSectionCarosel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 }, // Change this to 5 items
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  // const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.map((item, index) => (
    <HomeSectioncard
      item={item} // Use index as the key since kurtaPage1 doesn't provide unique keys
    />
  ));

  return (
    <div className='border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5 '>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          // onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 4 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            color="primary"
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: 'rotate(90deg)', color: 'black' }}
            />
          </Button>
        )}
     { activeIndex !== 0 &&  <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'rotate(-90deg)',
            bgcolor: 'white',
          }}
          color="primary"
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: 'rotate(90deg)', color: 'black' }}
          />
        </Button>
}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
