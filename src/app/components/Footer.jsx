import Image from "next/image"
import Link from "next/link"


const Footer = ()=> {
    return (
        <>
          
           <div className="footer container-section">
              
              <div className="grid gap-y-6">

              <div className="logo">
               <Link href="/">
                <Image src="/footerlogo.avif" alt="footer-logo" fill className="object-cover logoImage"/>
                </Link>
              </div>

              <div className="social">

                <Link href="https://www.instagram.com/careercognizance/" target="_blank" rel="noopener noreferrer" tabIndex="0">
                 <Image src="/icon/instagram.svg" alt="instagram" width={22} height={22}/>
                 </Link>

                 <Link href="https://www.linkedin.com/company/careercognizance/" target="_blank" rel="noopener noreferrer" tabIndex="0">
                 <Image src="/icon/linkedIn.svg" alt="linkedIn" width={22} height={22}/>
                 </Link>

                 <Link href="https://twitter.com/@theanithaselvan" target="_blank" rel="noopener noreferrer" tabIndex="0">
                 <Image src="/icon/twitter.svg" alt="twitter" width={22} height={22}/>
                 </Link>

                 <Link href="https://www.youtube.com/@careercognizance" target="_blank" rel="noopener noreferrer" tabIndex="0">
                 <Image src="/icon/youtube.svg" alt="youtube" width={22} height={22}/>
                 </Link>
              </div>

              </div>

              <div className="coaching">
                  <h2>Coaching Programs</h2>
                   <Link href="#mermaid-mentoring">Mermaid Mentoring</Link>
                   <Link href="#phoenix-program">Phoenix Program</Link>
                   <Link href="#career-coaching">Career Coaching</Link>
              </div>

              <div className="links">
                  <h2>Links</h2>
                   <Link href="/">Home</Link>
                   <Link href="/gallery">Gallery</Link>
                   <Link href="/about-us">About Us</Link>
              </div>

              <div className="contact-us">
                  <h2>Contact Us</h2>

                    <div className="flex gap-2">

                      <div> <Image src="/icon/email.svg" alt="instagram" width={22} height={22}/></div> 

                   <Link href="mailto:careercognizance@gmail.com">careercognizance@gmail.com</Link>
                   </div>

                   <div className="flex gap-2">

                   <div> <Image src="/icon/phone.svg" alt="instagram" width={22} height={22}/></div>
                  
                   <div>
                   <Link href="tel:+919902633991">+91 9902633991</Link><span className="text-white"> , </span>
                   <Link href="tel:7019555010">7019555010</Link>
                   </div>

                   </div>
                   
              </div>
           </div>

            <div className="secondary_footer container-section">
                 
                    <p className="reserved">&#9400; Career Cognizance. All right reserved</p>
               
                 <div className="terms">

                 <Link href="">Terms of Services</Link>
                 <Link href="">Privacy Policy</Link>
                 <Link href="">Return Policy</Link>

                 </div>
            </div>

        </>
    )
}

export default Footer