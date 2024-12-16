import React from 'react'

function PriceOption({name, price, features}) {
    return (
        <div className="w-full md:w-1/3 bg-black rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">{name}</h2>
            <div className="text-center">
                <p className="text-4xl font-extrabold text-blue-500 mb-4">
                    ${price}
                    <span className="text-lg font-medium text-gray-200">/month</span>
                </p>
                <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 mb-6">
                    Choose Plan
                </button>
            </div>
            <ul className="list-disc pl-5 text-gray-300">
                {features.map((feature, index) => (
                    <li key={index} className="mb-2">
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PriceOption
