// src/Onboarding.jsx
import React, { useState } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import bgImage from '../../public/images/bg.png';
import bgImage2 from '../../public/images/bg2.png';
import { Onboarding2_info, Onboarding3_info, Onboarding_page } from '../Info';

const Onboarding = ({ navigateTo }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        } else {
            navigateTo('login');
        }
    };

    const handleSkip = () => {
        navigateTo('login');
    };

    return (
        <div>
            {currentStep === 0 && (
                <div
                    className='min-h-screen bg-no-repeat p-0'
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100vh",
                        width: "100vw"
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full w-full text-center p-10">
                        <div className='bg-orange-400 opacity-100 rounded-3xl p-5 mt-72'>
                            <h4 className='text-white font-sans font-semibold text-4xl mb-8'>{Onboarding_page[0].title}</h4>
                            <p className='text-white font-sans font-medium text-sm'>{Onboarding_page[0].description}</p>
                            <div className='flex justify-between mt-10 text-white'>
                                <a href='#' onClick={handleSkip}>Skip</a>
                                <a href='#' onClick={handleNext}>Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {currentStep === 1 && (
                <div
                    className='min-h-screen bg-no-repeat p-0'
                    style={{
                        backgroundImage: `url(${bgImage2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100vh",
                        width: "100vw"
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full w-full text-center p-10">
                        <div className='bg-orange-400 opacity-100 rounded-3xl p-5 mt-72'>
                            <h4 className='text-white font-sans font-semibold text-4xl mb-8'>{Onboarding2_info[0].title}</h4>
                            <p className='text-white font-sans font-medium text-sm'>{Onboarding2_info[0].description}</p>
                            <div className='flex justify-between mt-10 text-white'>
                                <a href='#' onClick={handleSkip}>Skip</a>
                                <a href='#' onClick={handleNext}>Next</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {currentStep === 2 && (
                <div
                    className='min-h-screen bg-no-repeat p-0'
                    style={{
                        backgroundImage: `url(${bgImage2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100vh",
                        width: "100vw"
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full w-full text-center p-10">
                        <div className='bg-orange-400 opacity-100 rounded-3xl p-5 mt-72'>
                            <h4 className='text-white font-sans font-semibold text-4xl mb-8'>{Onboarding3_info[0].title}</h4>
                            <p className='text-white font-sans font-medium text-sm'>{Onboarding3_info[0].description}</p>
                            <div className='flex justify-center mt-3'>
                                <IoIosArrowDropright onClick={handleNext} className='text-white h-10 w-10 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Onboarding;
