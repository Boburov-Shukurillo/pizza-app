import { useState } from "react"
import leaf from '../assets/leaf.png'
import tomato from '../assets/pomidor.png'
import trash_icon from '../assets/trash.svg'
import bin from '../assets/bin.svg'

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {

    // console.log(cart);

    function formatSum(sum) {
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <div className="containerb flex items-center justify-center py-32 relative">
            <div className="w-1/2 flex flex-col rounded-xl gap-3 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full">
                <img src={leaf} className="w-40 absolute -left-20 top-20 -z-10 runn" alt="" />
                <img src={tomato} className="w-40 absolute right-1/3 bottom-0 -z-10 runn2" alt="" />
                {
                    // eslint-disable-next-line react/prop-types
                    cart.map((item, index) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const [foodCount, setFoodCount] = useState(item.food_count)

                        const deleteFromCart = (e) => {
                            // alert(e)
                            console.log(e);

                        }
                        console.log(cart);
                        return (
                            <div className="flex items-center backdrop-blur-lg justify-between gap-5 hover:scale-105 transition-all border-2 border-gish_rang rounded-lg p-2 pr-5 dark:text-white text-gish_rang" key={item.id}>
                                <img src={item.img} className="w-28 rounded-md" alt={item.name + " " + "img"} />
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex flex-col items-start justify-between">
                                        <p className="quicksand-semibold text-2xl">{item.name}</p>
                                        <p className="quicksand-semibold text-xl">{formatSum(item.price * (foodCount > 0 ? foodCount : 1))}uz</p>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex items-center">
                                            <button onClick={() => { setFoodCount(foodCount > 1 ? foodCount - 1 : foodCount) }} className="flex items-center justify-center dark:bg-gish_rang dark:border-none border-2 border-gish_rang rounded-full w-8 h-8 quicksand-bold text-2xl">-</button>
                                            <span className="w-10 quicksand-bold text-2xl text-center overflow-hidden">{foodCount}</span>
                                            <button onClick={() => { setFoodCount(foodCount + 1) }} className="flex items-center justify-center dark:bg-gish_rang dark:border-none border-2 border-gish_rang rounded-full w-8 h-8 quicksand-bold text-2xl">+</button>
                                        </div>
                                        <button onClick={(e) => { deleteFromCart(e.target.id) }} className="py-3 px-3 bg-red-700 rounded-md text-white quicksand-bold"><img id={index} className="w-5" src={trash_icon} alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                {
                    // eslint-disable-next-line react/prop-types
                    cart.length === 0 &&
                    <div className="w-full backdrop-blur-lg border-2 border-chochqa_rang  rounded-xl p-20 text-5xl quicksand-bold dark:text-chochqa_rang text-gish_rang flex flex-col items-center justify-between gap-10"><img className="w-1/3 inline-block" src={bin} alt="" />{"savat bo'm bo'sh"} </div>
                }
            </div>
        </div>
    )
}

export default Cart