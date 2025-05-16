"use client"

import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {

  return (
       <>
           <div className="section home-section container-section">
             
             <div className="home">
               
               <div>
                    <h3 className="pivot">Pivot your Purpose!</h3>
                    <h1 className="hero_title">Experts in Comprehensive & Personalised Consultation</h1>
                    <h2 className="heading_title"> Our offerings stimulate expansion, cultivate essential abilities, & in still assurance in traversing the perpetually changing landscape of Career and Life.</h2>
                    <div>
                     <Button className="secondary_button">Request Callback</Button>
                     <Button className="primary_button">Our programs</Button>
                    </div>
                  
               </div>

               <div>
                  <Image src="/home/JFMWSMkbj74Fp6b97pFc3B6zQ.avif" alt="career-cognizance"    
                   width={0}
                   height={0}
                   sizes="100vw"
                   style={{ width: "100%", height: "auto", position: "relative" }}
                />
               </div>

             </div>

           </div>

       </>
  );
}
