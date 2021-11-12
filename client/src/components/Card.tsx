import React from "react";

interface Props {
    title: String | React.ReactNode
    creator: String | React.ReactNode
    date: String | Date | React.ReactNode
}
const Card: React.FC<Props> = ({ title, creator, date }) => {
    return (
        <div className=" w-full lg:max-w-full lg:flex">
            <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal w-96">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        {title}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{creator}</p>
                        <p className="text-gray-600">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
