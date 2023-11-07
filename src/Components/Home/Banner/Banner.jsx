// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  
    return (
        <div>


            <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
        //  scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide>
            <div className='md:flex'>
                <div className='flex-1 flex flex-col justify-center items-center'>

                    <p className='text-4xl font-bold'>Share Your <span className='text-orange-500'>Food</span></p>
                    <p className='text-4xl font-bold'>Take Yours</p>
                    <Link to={"/addfood"}><button className='btn mt-5 bg-orange-300'>Start Sharing</button> </Link>
                    
                    

                  
                </div>
                <div className='flex-1'>
                    <img src={'https://i.ibb.co/WnhQ3RB/6197409-removebg-preview.png'} alt="" />

                </div>
            </div></SwiperSlide>

      <SwiperSlide>
            <div className='md:flex'>
            <div className='flex-1'>
                    <img src={'https://i.ibb.co/n0nGbdc/6349642-removebg-preview.png'} alt="" />

                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>

                    <p className='text-4xl font-bold'>Do not let your <span className='text-orange-500'>Food</span> <br /></p>
                    <p className='text-4xl font-bold text-red-500'>to be wasted</p>
                    <Link to={"/addfood"}><button className='btn mt-5 bg-orange-300'>Start Sharing</button> </Link>

                </div>
               
            </div></SwiperSlide>
      <SwiperSlide>
            <div className='md:flex'>

            <div className='flex-1 flex flex-col justify-center items-center'>

<p className='text-4xl font-bold'>Make people happy  </p>
<p className='text-4xl font-bold text-red-500'><span className='text-orange-500'>With your Food</span></p>
<Link to={"/addfood"}><button className='btn mt-5 bg-orange-300'>Start Sharing</button> </Link>

</div>
            <div className='flex-1'>
                    <img src={'https://i.ibb.co/Ns7mqwW/6349457-removebg-preview.png'} alt="" />

                </div>
                
               
            </div></SwiperSlide>
    

    </Swiper>
        </div>
    );
};

export default Banner;