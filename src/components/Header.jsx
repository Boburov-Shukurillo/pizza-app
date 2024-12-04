import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../assets/pizza.svg'

const Header = () => {
    return (
        <div className='containerb py-5 flex  justify-between'>
            <Link to='/'><h1 className='flex items-center gap-1 text-5xl quicksand-semibold text-gish_rang'><img src={pizza} alt="logo" /> Mania</h1></Link>

            <nav className='flex pb-2'>
                <ul className='flex items-end gap-10'>
                    <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/'>Home</Link></li>
                    <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/menu'>Menu</Link></li>
                    <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/cupons'>Specials & Coupons</Link></li>
                    <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Header