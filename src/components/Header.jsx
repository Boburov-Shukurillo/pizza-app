import { Link } from 'react-router-dom'
import pizza from '../assets/pizza.svg'
import buy_icon from '../assets/buy.png'

const Header = () => {
    return (
        <div className="border-b-2 border-gish_rang">

            <div className='containerb py-3 flex justify-between dark:bg-negr_rang'>
                <Link to='/'><h1 className='flex items-center gap-1 text-5xl quicksand-semibold text-gish_rang'><img src={pizza} alt="logo" /> Mania</h1></Link>

                <div className="flex items-end gap-10">
                    <nav className='flex items-end pb-2'>
                        <ul className='flex items-end gap-10'>
                            <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/'>Home</Link></li>
                            <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/menu'>Menu</Link></li>
                            <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/cupons'>Specials & Coupons</Link></li>
                            <li className='text-gish_rang quicksand-semibold text-2xl'><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </nav>
                    <Link to='/cart' className='px-5 py-3.5 bg-gish_rang rounded-lg'><img src={buy_icon} alt="buy icon" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header