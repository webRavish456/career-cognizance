import Image from "next/image"
import Link from "next/link"

const Header = ()=> {
    return (
        <>
          <div className="flex justify-between width:100% header items-center">
          <div className="logo">
            <Link href="/">
                <Image
                    src="/logo.avif"
                    alt="logo"
                    fill
                    className="object-cover logoImage"
                />
                </Link>
                </div>
            <div className="navbar">
                <h2>Home</h2>
                <h2>Program</h2>
                <h2>Gallery</h2>
                <h2>About Us</h2>
            </div>
          </div>
        </>
    )
}

export default Header