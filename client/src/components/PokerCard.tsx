import React from 'react'
import CoffeCup from './Icons/CoffeeCup'

interface Props {
    value: String | Number
}

const PokerCard: React.FC<Props> = ({ value }) => {
    return (
        <button className="w-23 p-3 rounded bg-purple-100">
            <div className="text-sm text-left mb-5">
                {value}
            </div>
            <div className=" text-2xl text-center h-28 border m-5 pt-10 border-gray-700 border-dashed rounded">
                {value === 'C' ? <CoffeCup className="w-10 ml-8" /> : value}
            </div>
            <div className="text-sm text-left mt-5 rotate-180">
                {value}
            </div>
        </button>
    )
}

export default PokerCard;