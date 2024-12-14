import coffe from '../assets/coffe.png'
import Capcicum from '../assets/Capcicum.png'
import karam from '../assets/karam.png'

const Contact = () => {
    return (
        <div className="containerb flex items-center justify-between relative">
            <div className="w-2/3 flex flex-wrap items-center justify-end relative">
                <img src={coffe} className='w-1/2 object-cover' alt="" />
                <img src={Capcicum} className='w-1/2 object-cover' alt="" />
            </div>
            <div className="w-1/3 pt-10 dark:text-white transition-all">
                <form action="" className='w-full backdrop-blur-sm bg-[#D9D9D959] border-2 rounded-md flex flex-col items-center justify-center py-10 px-16 pb-20'>
                    <h1 className='text-5xl  quicksand-bold mb-2 tracking-wider dark:text-white text-gish_rang'>Reservation</h1>
                    <p className='text-sm quicksand-semibold  mb-2 tracking-wide'>Book online or give us a call on +91 1111 222 333</p>
                    <p className='text-sm quicksand-semibold  mb-24 tracking-wider'>Between 9:30 am - 10:00 pm</p>
                    <div className="w-full flex items-center justify-between gap-3 mb-7">
                        <span className=' quicksand-bold text-xl leading-3'>Name</span>
                        <input className='bg-transparent border-b-2 border-dashed w-3/4 outline-none  quicksand-semibold dark:border-white border-black' type="text" />
                    </div>
                    <div className="w-full flex items-center justify-between gap-3 mb-7">
                        <span className=' quicksand-bold text-xl leading-3'>E-mail</span>
                        <input className='bg-transparent border-b-2 border-dashed w-3/4 outline-none  quicksand-semibold dark:border-white border-black' type="email" />
                    </div>
                    <div className="w-full flex items-center justify-between gap-3 mb-7">
                        <span className=' quicksand-bold text-xl leading-3 w-3/4'>People Number</span>
                        <input className='bg-transparent border-b-2 border-dashed w-3/4 outline-none  quicksand-semibold dark:border-white border-black' type="tel" />
                    </div>
                    <div className="w-full flex items-center justify-between gap-3 mb-20">
                        <span className=' quicksand-bold text-xl leading-3 w-1/2'>Date & time</span>
                        <input className='bg-transparent border-b-2 border-dashed w-3/4 outline-none  quicksand-semibold dark:border-white border-black' type="date" />
                    </div>
                    <button className='text-xl quicksand-semibold px-5 py-2 bg-gish_rang rounded-md '>Send Email</button>
                </form>
                <img src={karam} className='absolute -bottom-32 -right-12 -z-10 w-96' alt="" />
            </div>
        </div>
    )
}

export default Contact