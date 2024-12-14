import hand_taking_pizza from '../assets/hands-taking-pizza.png'

const Cupons = () => {
    return (
        <div className="containerb  overflow-hidden pt-20 flex items-center justify-between">

            <div className='w-1/2 h-[800px] flex relative'>
                <div className="overflow-hidden w-full h-full">
                    <div className="flex flex-col items-center justify-between w-full relative dark:text-chochqa_rang text-jigar_rang">
                        <h1 className='text-5xl quicksand-semibold text-64'><span className='text-gish_rang'>Pizza</span> Of The Month</h1>
                        <h1 className='text-5xl quicksand-semibold text-64 mb-10'>The big <span className='quicksand-bold uppercase text-gish_rang text-8xl'>bird</span></h1>
                        <img className='w-full absolute top-44 -left-20 pb-10' src={hand_taking_pizza} alt="hands taking pizza" />
                    </div>
                </div>
                <hr className='w-[1000px] h-2 bg-gish_rang border-none rotate-[116deg] -right-[690px] bottom-[430px] absolute -z-10' />
            </div>
            <ul className="space-y-10 text-5xl dark:text-chochqa_rang text-jigar_rang ">
                <li className="quicksand-semibold ml-[200px]">• Meat Pizza</li>
                <li className="quicksand-semibold ml-[160px]">• Margarita Pizza</li>
                <li className="quicksand-semibold ml-[120px]">• Hawaiian Pizza</li>
                <li className="quicksand-semibold ml-[80px]">• Pepperoni Pizza</li>
                <li className="quicksand-semibold ml-[40px]">• Veggie Pizza</li>
                <li className="quicksand-semibold ml-[0px]">• Cheese Pizza</li>
            </ul>
        </div>
    )
}

export default Cupons   