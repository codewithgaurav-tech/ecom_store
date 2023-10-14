// import React, { useState } from 'react';
// import { Button, Container, Grid, Typography } from '@mui/material';
// import { ArrowLeft, ArrowRight } from '@mui/icons-material';

// const bannerImages = [
//   {
//     imageURL: '/banner1.jpg',
//     title: 'Summer Collection',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
//   },
//   {
//     imageURL: '/banner2.jpg',
//     title: 'Casual Collection',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
//   },
// ];

// const BillboardSection: React.FC = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
//   };

//   const handleNextClick = () => {
//     console.log("check")
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
//   };
//   console.log("Data", bannerImages, currentImageIndex)
//   const currentImage = bannerImages[currentImageIndex];

//   console.log("img", currentImage.imageURL)

//   return (
//     <section id="billboard" className="overflow-hidden">
//       <Button className="button-prev img-button" onClick={handlePrevClick}>
//         <ArrowLeft />
//       </Button>
//       <Button className=" button-next img-button" onClick={handleNextClick}>
//         <ArrowRight />
//       </Button>
//       <div className="swiper main-swiper">
//         <div className="swiper-wrapper">
//           <div
//             className="swiper-slide"
//             style={{
//               backgroundImage: `url(${currentImage.imageURL})`,
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               maxWidth: '100%',
//             }}
//           >
//             <div className="banner-content">
//               <Container>
//                 <Grid container>
//                   <Grid item md={6}>
//                     <Typography variant="h2" className="banner-title">
//                       {currentImage.title}
//                     </Typography>
//                     <Typography>{currentImage.description}</Typography>
//                     <div className="btn-wrap">
//                       <a href="shop.html" className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabIndex={0}>
//                         Shop it now <i className="icon icon-arrow-io"></i>
//                       </a>
//                     </div>
//                   </Grid>
//                 </Grid>
//               </Container>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BillboardSection;


import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

const bannerImages = [
  {
    imageURL: '/banner1.jpg',
    title: 'Summer Collection',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
  },
  {
    imageURL: '/banner2.jpg',
    title: 'Casual Collection',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.',
  },
];

const BillboardSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const currentImage = bannerImages[currentImageIndex];

  return (
    <section id="billboard" className="overflow-hidden">
      <Button className="button-prev img-button" onClick={handlePrevClick}>
        <ArrowLeft />
      </Button>
      <Button className="button-next img-button" onClick={handleNextClick}>
        <ArrowRight />
      </Button>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className="swiper main-swiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${currentImage.imageURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  maxWidth: '100%',
                }}
              >
                <div className="banner-content">
                  <Container>
                    <Typography variant="h2" className="banner-title">
                      {currentImage.title}
                    </Typography>
                    <Typography>{currentImage.description}</Typography>
                    <div className="btn-wrap">
                      <a href="shop.html" className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabIndex={0}>
                        Shop it now <i className="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default BillboardSection;
