import { useState } from "react";
import "../styles/home.css"
import { motion } from "framer-motion";

function Home() {
   // // // // // let box = document.querySelector(".img-container");
   // // // // // const btnpressprev = () => {
   // // // // //    let width = box.clientWidth;
   // // // // //    box.scrollLeft = box.scrollLeft - width;
   // // // // //    console.log(width);
   // // // // // }
   // // // // // const btnpressnext = () => {
   // // // // //    let width = box.clientWidth;
   // // // // //    box.scrollLeft = box.scrollLeft + width;
   // // // // //    console.log(width);

   // // // // // }
   return (

      <>
         <div className="main-content">
            {/* <button className="pre-btn" onClick={btnpressprev}><i className="bi bi-arrow-left"></i></button>
               <button className="next-btn" onClick={btnpressnext}><i className="bi bi-arrow-right"></i></button> */}
            <div className="img-container">
               <img src="/image/banner-2.jpg" alt="" className="heading-img" />



            </div>

         </div>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="service-menu">
            <div className="main-card">
               <h1>Services</h1>
               <p>Online and in-person, you can find package printing services to fit your needs.</p>
            </div>
            {[
               { title: 1, titlename: "Designing", borderBottom: "0.5rem solid #54b9fd" },
               { title: 2, titlename: "Cylinder", borderBottom: "0.5rem solid #fde642" },
               { title: 3, titlename: "Gravure Printing", borderBottom: "0.5rem solid #1a181d" },
               { title: 4, titlename: "Flexo Printing", borderBottom: "0.5rem solid #fd4682" },
               { title: 5, titlename: "Digital Printing", borderBottom: "0.5rem solid #54b9fd" },
            ].map((titles) =>
            (
               <div key={titles} className="service-card" style={{ borderBottom: titles.borderBottom }}>
                  <h1>{titles.titlename}</h1>
               </div>
            )
            )
            }
         </motion.div>
         <div className="content-1" >
            <h1>Packaging For Industries</h1>
            <img src="/image/content-image.svg" alt="content-image" />
         </div >
         <div className="content-3">
            <h1>Custome Packaging</h1>
            <p>We understand that every business has unique packaging requirements. That’s why we offer a wide range of customizable packaging solutions to meet the specific needs of various industries, including food and beverages, agriculture, household, and more. Our team works closely with you to design and deliver packaging that aligns perfectly with your brand and product specifications.</p>
         </div>
         <div className="content-2">
            <h1>We Provide Packaging solutions</h1>
            <div className="inquiry-cards">
               {[1, 2, 3, 4, 5, 6].map((image) => (
                  <div key={image} className="inquiry-1">
                     <img src={`/image/${image}.png`} alt="" />
                  </div>
               ))}
            </div>
         </div>

      </>


   )

}
export default Home;