"use client"

import Button from '@mui/material/Button';
import Link from 'next/link';

const Contact = ()=> {
    return (
        <>
         <div className='contact'>
            <h1 className='header_title'>Let's continue</h1>
            <p className='primary_title'>Let's continue to seek out opportunities to connect, learn from one another, and make a positive impact in the world together.</p>
            <Link href="https://wa.link/rz3zlu" target="_blank" rel="noopener noreferrer" tabIndex="0"><Button variant="contained" className='secondary_button'>Enroll Now</Button></Link>
         </div>
        </>
    )
}

export default Contact