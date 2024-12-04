import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';

import { menu } from '../data/data';
import pizza from '../assets/pizza.webp';
import menu_pizz from '../assets/menu_pizza.png'

const Menu = () => {
    function formatSum(sum) {
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="relative containerb dark:text-white text-negr_rang/90 my-10">

            <div className='flex items-center justify-between flex-col gap-10  mb-40'>
                <h1 className='KushanScript-Regular text-8xl text-gish_rang text-center'>Menu</h1>
                <img src={menu_pizz} alt="" className='absolute -left-72 w-1/3 bottom-1/2 -z-10' />
                <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                    {menu.map((food) => {
                        return (
                            <h1 key={food.id} className='KushanScript-Regular text-2xl '>{food.name} ............................ {formatSum(food.price)}uz</h1>
                        )
                    })}
                </div>

            </div>

            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={4}
                navigation={true}
                modules={[Parallax, Autoplay, Navigation]}
                className="Swiper "
            >
                <div
                    slot="container-start"
                    data-swiper-parallax="-23%"
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                ></div>

                {menu.map((item, index) => (
                    <div className="overflow-hidden w-full" key={index}>
                        <SwiperSlide className='dark:bg-white/5  flex flex-col justify-between rounded-xl shadow-2xl'>
                            <div className="flex flex-col items-center p-3 ">
                                <img
                                    src={pizza}
                                    alt={item.name}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                />
                                <div className="w-full flex-col items-center justify-between my-2   ">
                                    <h2 className="text-negr_rang dark:text-chochqa_rang text-xl quicksand-semibold">{item.name}</h2>
                                    <p className='text-negr_rang dark:text-chochqa_rang quicksand-semibold text-sm'>{item.price} uz</p>
                                </div>
                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white quicksand-semibold py-2 px-6 rounded-md transition-colors duration-200">
                                    Buy
                                </button>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div >
    );
};

export default Menu;
