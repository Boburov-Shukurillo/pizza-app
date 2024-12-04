import React from 'react'
import burger from '../assets/burger.jpeg'
import search_icon from '../assets/search-icon.svg'
import leaf from '../assets/leaf.png'

const Home = () => {

    return (
        <div className="containerb flex items-center justify-between py-20 relative">
            <div className="w-2/5 flex flex-col items-start justify-between gap-y-16">
                <h1 className='text-8xl quicksand-bold text-gish_rang'>Pizza family</h1>
                <p className='text-gish_rang text-2xl w-1/2 quicksand-bold'>people disappoint, but pizza never does.
                </p>
                <div className="flex items-center gap-2 w-full">
                    <input type="search" placeholder='Enter Location' className='dark:bg-white/5 bg-black/5 border-gish_rang border-2 rounded-md py-3 w-1/2 px-5 quicksand-bold dark:text-white outline-none' />
                    <button className='bg-gish_rang quicksand-bold px-5 py-3 rounded-md text-white text-xl flex items-center gap-1'><img src={search_icon} alt="" /> Search Location</button>
                </div>
                <button className='bg-gish_rang quicksand-bold px-10 py-3 rounded-md text-white text-xl'>Try Now</button>
            </div>
            <div className="w-1/2 relative">
                <img className='mask-ink scale-110' src={burger} alt="ink image" />
            </div>


        </div>
    )
}

export default Home