// src/Onboarding.jsx
import React from 'react';
import { Onboarding2_info } from '../Info';

const Onboarding2 = () => {

    return <combinedOnboarding onboardingData={Onboarding2_info} />;
};
//         <div>
//             {
//                 Onboarding2_info.map((item, index) => (
//                     <div
//                         key={index}
//                         className='min-h-screen bg-no-repeat p-0'
//                         style={{
//                             backgroundImage: `url(${item.img})`,
//                             backgroundRepeat: "no-repeat",
//                             backgroundSize: "cover",
//                             height: "100vh",
//                             width: "100vw"
//                         }}
//                     >
//                         <div className="flex flex-col items-center justify-center h-full w-full text-center p-10">
//                             <div className='bg-orange-400 opacity-100 rounded-3xl p-5 mt-72'>
//                                 <h4 className='text-white font-sans font-semibold text-4xl mb-8'>{item.title}</h4>
//                                 <p className='text-white font-sans font-medium text-sm'>{item.description}</p>
//                                 <div className='flex justify-between mt-10 text-white'>
//                                     <a href='#'>Skip</a>
//                                     <a href='#'>Next</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };

export default Onboarding2;
