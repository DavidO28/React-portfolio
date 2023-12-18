import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import './MySwiper.css'
import Home from "../Home/Home";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";



function MySwiper() {


    return (
        <div>
            <div className="snowfall">
                  <Swiper
                pagination={{
                    // type: 'progressbar',
                    clickable: true,
                    renderBullet: function (index, className) {
                        {index}
                        return '<span class="' + className + '">' + '</span>';
                       
                    },
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation, Mousewheel, Autoplay, Keyboard]}
                mousewheel={{ invert: false }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
                keyboard={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Home />
                    <span className='custom-progressbar'>Home</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Education />
                    <span className='custom-progressbar bar2'>Education</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Projects />
                    <span className='custom-progressbar bar3'>Projects</span>
                </SwiperSlide>
            </Swiper>
            </div>
          
        </div>
    )
}

export default MySwiper;