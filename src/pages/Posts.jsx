
// import React from "react";
// import nike1 from "../assets/nike-1.png";
// import nike2 from "../assets/nike-2.png";
// import nike3 from "../assets/nike-3.png";
// import nike4 from "../assets/nike-4.png";
// import { FaBagShopping } from "react-icons/fa6";

// const images = [nike1, nike2, nike3, nike4, nike1, nike2, nike3, nike4];
// const shoedata = [
//   { title: "Nike Air Max 1 Premium", cost: "₹ 14, 995.00" },
//   { title: "Nike Air Max Plus 3", cost: "₹ 17, 495.00" },
//   { title: "Luka 2 PF", cost: "₹ 11, 895.00" },
//   { title: "Nike Air Max Dn", cost: "₹ 13, 995.00" },
//   { title: "Nike Air Max 1 Premium", cost: "₹ 14, 995.00" },
//   { title: "Nike Air Max Plus 3", cost: "₹ 17, 495.00" },
//   { title: "Luka 2 PF", cost: "₹ 11, 895.00" },
//   { title: "Nike Air Max Dn", cost: "₹ 13, 995.00" },
// ];

// const BentoGrid = () => {
//   return (
//     <div className="font-inter grid auto-rows-[230px] lg:auto-rows-[200px] md:auto-rows-[220px]  grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 ">
//       {[...Array(8)].map((_, i) => (
//         <div
//           key={i}
//           className={`relative rounded-xl overflow-hidden p-4 ${
//             i === 0
//               ? "row-span-2 col-span-2"
//               : i === 1 || i === 2 || i === 3 || i === 4
//               ? "row-span-1 col-span-1"
//               : i === 5 || i === 6
//               ? "lg:row-span-2  row-span-1 lg:col-span-1 col-span-2"
//               : "row-span-2 col-span-2"
//           }`}
//           onMouseEnter={(e) => {
//             e.currentTarget.querySelector(".hover-text").style.opacity = 1;
//             e.currentTarget.querySelector("img").style.opacity = 0.7;
//             e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
//             e.currentTarget.querySelector("img").style.transitionDuration =
//               "300ms";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.querySelector(".hover-text").style.opacity = 0;
//             e.currentTarget.querySelector("img").style.opacity = 1;
//             e.currentTarget.querySelector("img").style.transform = "scale(1.0)";
//           }}
//         >
//           <img
//             src={images[i]}
//             alt={`nike${i + 1}`}
//             className="absolute inset-0 object-cover w-full h-full rounded-xl "
//           />
//           <div className="absolute inset-0 items-center justify-center rounded-xl bg-black/70 text-white opacity-0 transition-opacity hover-text duration-500 flex flex-col gap-4">
//             <h1 className="sm:text-xl text-md font-semibold text-center">
//               {shoedata[i].title}
//             </h1>
//             <button className="bg-black sm:px-4 sm:py-2 text-sm px-2 py-1  rounded-full flex justify-center items-center gap-2 border-[1px] border-white">
//               <FaBagShopping />
//               {shoedata[i].cost}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BentoGrid;

import React from 'react'

const Posts = () => {
  return (
    <div>
      
    </div>
  )
}

export default Posts
