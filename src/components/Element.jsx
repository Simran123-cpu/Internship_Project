import React from 'react';

const element = () => {
    return (
        <div className=''>
            <div className="bg-orange-500 place-items-center justify-between bg-opacity-90 text-white p-8 rounded-lg max-w-md mx-auto text-center">
                <h1 className="text-2xl font-bold mb-4">We serve incomparable delicacies</h1>
                <p className="mb-4">
                    All the best restaurants with their top menu waiting for you, they can’t wait for your order!!
                </p>
                <div className="flex justify-center space-x-2 mb-4">
                    <div className="h-2 w-8 bg-white rounded-full"></div>
                    <div className="h-2 w-8 bg-gray-400 rounded-full"></div>
                    <div className="h-2 w-8 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex justify-between">
                    <button className="text-white">Skip</button>
                    <button className="text-white flex items-center">
                        Next <span className="ml-2">→</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default element;


