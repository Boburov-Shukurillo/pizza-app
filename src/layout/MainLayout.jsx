import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

const MainLayout = () => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div>
            <Header />
            <Outlet />
            <button
                className="mt-4 px-4 py-2 left-[95%] fixed bottom-10 w-16 h-16 dark:bg-chochqa_rang bg-gish_rang rounded-full"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? <img className='w-full object-cover' src={sun} alt="" /> : <img src={moon} className='w-full object-cover' alt="" />}
            </button>
        </div>
    )
}

export default MainLayout