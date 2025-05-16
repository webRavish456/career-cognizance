"use client"

import { Grid, useMediaQuery } from "@mui/material"
import Image from "next/image"


const Gallery = () => {

   const isSmScreen = useMediaQuery("(max-width:768px)");

    return (
       
       <>
            
             <div className="gallery">
                <h1 className="hero_title">Gallery</h1>
             </div>
             
             <div className="container-section contain">

                <h2 className="heading_title pb-8">Army school Children Resilience</h2>
                  

                  <Grid container spacing={2}>

                  <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
                 
                  <div className="image-show">
                    <Image src="/gallery/army.avif" alt="army-school" fill className="object-conatin"/>
               
                   </div>
                  </Grid>

                  <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
                     
                  <div className="image-show">
                     <Image src="/gallery/fPiBlO5iOywjltZIdwfFPZYLEnI.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                    </div>

                  </Grid>

                  </Grid>

                <h2 className="heading_title pt-8 pb-8">2023 Army womens association workshop on Financial Literacy</h2>
                  
                <Grid container spacing={2}>

                  <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/AvHNKGSXqeEgY29BddPM5f2724.avif" alt="army-school" fill className="object-conatin"/>
                    </div>

                    </Grid>

                   <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
  
                    <div className="image-show">
                       <Image src="/gallery/Rt5kZqDKlcqxvkjEJoPa6a1tMv8.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                  <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >

                      <div className="image-show">
                       <Image src="/gallery/N6dMf8T9pWGEBUN2JSo1hLXM9k.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
  
                  </Grid>
                  </Grid>



                  <h2 className="heading_title pt-8 pb-8">Glimpse of our 1<sup>st</sup> Wonder Women Community</h2>
                  
                   <Grid container spacing={2}>

                      <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/lKGuHsptnZCjXt2x0NSVkUjvpD8.avif" alt="army-school" fill className="object-conatin"/>
                    </div>
                   
                    </Grid>

                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
  
                    <div className="image-show">
                       <Image src="/gallery/qkdYqWyNHcbfAm3ldYwehFPm0c.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >

                      <div className="image-show">
                       <Image src="/gallery/TpkwUOUY7uR1i2OdALHq1eYXPwI.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >

                      <div className="image-show">
                      <Image src="/gallery/bEwBFrfsEU3b7wk1VFqUfJuCw8.avif" alt="army-school" fill className="object-conatin"/>
                    </div>
                    </Grid>

                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
  
                    <div className="image-show">
                       <Image src="/gallery/GCeP2bZAD3FBXcHPcy6DnBu17o.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:8, md:8}} >

                      <div className="image-show">
                       <Image src="/gallery/YIUWbaA1MShPvtLmQxazyrI4xpY.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:4, md:4}} >

                      <div className="image-show">
                       <Image src="/gallery/nFmJElCaI0Gz4hjyi3j4yT522aY.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>
                      <Grid size={{xs:12, sm:12, md:12}} >

                      <div className="image-show">
                       <Image src="/gallery/3YU2ju9oobbyyQwgHibNzM.avif" alt="army-school-children-seminar" fill className="object-contain"/>
                      </div>
                  </Grid>
                  </Grid>
        

                  <h2 className="heading_title pt-8 pb-8">Honored by Garden City University Bangalore for 2020 Womens Day .conducted stress management for Professors and lectures</h2>
                  
                   <Grid container spacing={2}>

                     <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/wIquZQt2hzxDZtJ53WfrEEYqg2w.avif" alt="army-school" fill className="object-conatin"/>
                    </div>

                    </Grid>


                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
  
                    <div className="image-show">
                       <Image src="/gallery/TOh6uvYJydsZLtx0UhkPjpGTA.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >

                      <div className="image-show">
                       <Image src="/gallery/rtAzC31OnOyyL5rNNsxYKl3gipg.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>
  
                     </Grid>

                  <h2 className="heading_title pt-8 pb-8">EKAL AROGYA FOUNDATION OF INDIA Bangalore chapter</h2>
                  
                  <Grid container spacing={2}>

                     <Grid size={{xs:12, sm:12, md:12}} >

                    <div className="image-show">
                      <Image src="/gallery/tJxSjmhu5yfIKOjRe404ul1E4Oc.avif" alt="army-school" fill className="object-conatin"/>
                    </div>
                    </Grid>

                    </Grid>

                    <h2 className="heading_title pt-8 pb-8">International Yoga day 2024</h2>
                  
                   <Grid container spacing={2}>

                   <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/T1vgbtYY9i7ivzLPTJmZiRqttk.avif" alt="army-school" fill className="object-conatin"/>
                    </div>
                    </Grid>

                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
  
                    <div className="image-show">
                       <Image src="/gallery/srpS5JLcPY1LGO0Pn0cxu1r1v3g.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>

                      <Grid size={{xs:12, sm:12, md:12}} >

                      <div className="image-show">
                       <Image src="/gallery/OqqZOSQWfEzPzP5Qo2pKc7Cp5g.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                      </Grid>

                  <h2 className="heading_title pt-8 pb-8">100 volunteers were facilitated from Ekal who worked extensively during covid from my Humanity Volunteer group</h2>
                  
                  <Grid container spacing={2}>

                <Grid size={{xs:12, sm:isSmScreen?12:6, md:8}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/NyAcxGvAw3yNEI0FuCg8koJAnk.jpg" alt="army-school" fill className="object-conatin"/>
                    </div>

                    </Grid>

                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >
  
                    <div className="image-show">
                       <Image src="/gallery/zz8qLdIgZYhbAf2lknpSoCheTo.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:6, md:8}} container spacing={2} >

                      <div className="image-show">
                       <Image src="/gallery/2vzu0UNhTCEZCkKLxkHDpq4deAI.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
             
                      <div className="image-show">
                       <Image src="/gallery/Bj6pnC2qAQzt83BUFL2RlSjkU.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>

                      <Grid size={{xs:12, sm:isSmScreen?12:6, md:4}} >

                      <div className="image-shows">
                       <Image src="/gallery/rdNfyjozYzXTeLoBsuWSEOseB7k.jpeg" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>
  
                    </Grid>

                  <h2 className="heading_title pt-8 pb-8">Ngo work over</h2>
                  
                  <Grid container spacing={2}>

                   <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/RjEfi3WrsHmJ3dAL3YjatoE.avif" alt="army-school" fill className="object-conatin"/>
                    </div>

                    </Grid>

                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
  
                    <div className="image-show">
                       <Image src="/gallery/DHp114tLXqppOLX7Kjujt4QVQ90.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>

                      <Grid size={{xs:12, sm:12, md:12}} >

                      <div className="image-show">
                       <Image src="/gallery/nGuNvNtffUPOVX2rE02DpJ8WU.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>

                      </Grid>
  
                      </Grid>

                  <h2 className="heading_title pt-8 pb-8">Army veterans industrial visit to gather information on farming</h2>
                  
                    <Grid container spacing={2}>

                       <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
                    
                    <div className="image-show">
                      <Image src="/gallery/LS5FV8BFyrAv095uYVa1COfQ.jpg" alt="army-school" fill className="object-conatin"/>
                    </div>

                    </Grid>

                    <Grid size={{xs:12, sm:isSmScreen?12:6, md:6}} >
  
                    <div className="image-show">
                       <Image src="/gallery/vSpvJdowxvizFTrTSLY7NNx2pmA.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                      </Grid>

                      <Grid size={{xs:12, sm:12, md:12}} >

                      <div className="image-show">
                       <Image src="/gallery/15tD7dLKq0vjMZk2D33oz7b4OE.avif" alt="army-school-children-seminar" fill className="object-conatin"/>
                      </div>
                    
                      </Grid>
  
                      </Grid>


             </div>
          
       
        </>

    )
}

export default Gallery

/* <img src="/gallery/army.avif" alt="army-school"/>
<img src="/gallery/fPiBlO5iOywjltZIdwfFPZYLEnI.avif" alt="army-school-children-seminar"/> */
