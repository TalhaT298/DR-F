// import { useEffect, useState } from "react";
// import banner1 from "../../../assets/banner1.jpg"

// export const Banner = () => {
//   const [currentSlider, setCurrentSlider] = useState(0);
//   const sliders = [
//     {
//       img: banner1,
//       title: "Escape 1",
//       des: "Associate Professor and Head of Hepatology Dept",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Escape 2",
//       des: "Associate Professor and Head of Hepatology Dept",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Escape 3",
//       des: "Associate Professor and Head of Hepatology Dept",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Escape 4",
//       des: "Associate Professor and Head of Hepatology Dept",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Escape 5",
//       des: "Associate Professor and Head of Hepatology Dept",
//     },
//   ];
//   // if you don't want to change the slider automatically then you can just remove the useEffect
//   useEffect(() => {
//     const intervalId = setInterval(
//       () =>
//         setCurrentSlider(
//           currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
//         ),
//       5000
//     );
//     return () => clearInterval(intervalId);
//   }, [currentSlider]);

//   return (
//     <>
//       <div
//         className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
//         style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
//       >
//         {/* text container here */}
//         <div className="drop-shadow-lg text-white text-center px-5">
//           <h1 className="text-xl lg:text-3xl font-semibold mb-3">
//             {sliders[currentSlider].title}
//           </h1>
//           <p className="text-sm md:text-base lg:text-lg">
//             {sliders[currentSlider].des}
//           </p>
//         </div>
//       </div>
//       {/* slider container */}
//       {/* want below slide container remove */}
//       {/* <div className="flex justify-center items-center gap-3 p-2">
        
//         {sliders.map((slide, inx) => (
//           <img
//             onClick={() => setCurrentSlider(inx)}
//             key={inx}
//             src={slide.img}
//             className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
//               currentSlider === inx ? "border-2 border-black p-px" : ""
//             } rounded-md md:rounded-lg box-content cursor-pointer`}
//             alt={slide.title}
//           />
//         ))}
//       </div> */}
//     </>
//   );
// };

import React, { useEffect, useState } from 'react';
import banner1 from "../../../assets/banner1.jpg"
const banners = [
    {
        headline: "Associate Professor and Head of Hepatology Dept",
        paragraph: ".Sir Salimullah Medical College",
        backgroundImage: `url(${banner1})`

    },
    {
        headline: "Associate Professor and Head of Hepatology Dept",
        paragraph: "Mitford Hospital",
        backgroundImage: "url('https://via.placeholder.com/1920x600?text=Banner+2')"
    },
    {
        headline: "Associate Professor and Head of Hepatology Dept",
        paragraph: "Be part of our amazing community and grow with us.",
        backgroundImage: "url('https://via.placeholder.com/1920x600?text=Banner+3')"
    }
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className="relative w-full h-[600px] overflow-hidden">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: banner.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
                        <div className="text-center px-4">
                            <h1 className="text-4xl font-bold mb-4">{banner.headline}</h1>
                            <p className="text-lg">{banner.paragraph}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Banner;