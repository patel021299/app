import { useState, useEffect } from 'react';
import Logo from '../assets/navLogo.png'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                //show
                gsap.to('.navbar', { y: 0 })
            } else {
                //hide
                gsap.to('.navbar', { y: -100 })
            }
            prevScrollpos = currentScrollPos;
        }
    }, [])

    return (
        <nav className="navbar bg-navbar w-full fixed flex items-center justify-center h-16 z-50 ">
            <div className="h-full w-full flex items-center justify-between px-9">
                <span className="flex items-center justify-center">
                    <img className="h-9" src={Logo} alt="Logo" loading="lazy" />
                </span>
                <ul className="gap-9 flex items-center justify-end font-medium text-white">
                    <li className="">
                        <a href="#" className="flex flex-col items-center justify-center  group">
                            <div>
                                Home
                            </div>
                            <span className=" group-hover:w-2/4 h-[0.1px] bg-primary" />

                        </a>
                    </li>
                    <li className="">
                        <a href="#light" className="nav-link group">
                            <div>
                                Services
                            </div>
                            <span className="group-hover:w-2/4 h-[0.1px] bg-primary" />
                        </a>
                    </li>
                    <li className="">
                        <a href="#about" className="nav-link group">
                            <div>
                                About
                            </div>
                            <span className=" group-hover:w-2/4 h-[0.1px] bg-primary" />
                        </a>
                    </li>
                    <li className="">
                        <a href="#contact" className="nav-link group">
                            <div>
                                Contact
                            </div>
                            <span className=" group-hover:w-2/4 h-[0.1px] bg-primary" />
                        </a>
                    </li>
                    <li >
                        <a href="#experience" className="text-navbar bg-primary rounded-md p-3">Experience</a>
                    </li>
                </ul>
            </div>

        </nav >
    );
}

export default Navbar;
