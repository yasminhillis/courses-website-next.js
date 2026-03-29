'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'; 
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar(){
    const [isOpen, setOpen] = useState(false); 
    const menuRef = useRef(null); 
    const hamburgerIconRef = useRef(null);

    useEffect(() => {
        const handleClickEvent = (event: MouseEvent) => {
            const clickedHamburger = hamburgerIconRef.current?.contains(event.target as Node)
            if (menuRef.current && !menuRef.current?.contains(event.target as Node) && !clickedHamburger) {
                setOpen(false)
            }
        }
        
        document.addEventListener('mousedown', handleClickEvent)
        return () => document.removeEventListener('mousedown', handleClickEvent)
    }, [])

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }
        
    const closeMenu = () => {
        setOpen(false)
    }

    const navLinks = [
        {href:"/", label: 'Home'},
        {href:"/courses", label: 'Courses'},
        {href:"/about", label: 'About'},
        {href:"/faq", label: 'FAQ'},
        {href:"/blog", label: 'Blog'}, 
    ]
    
    return <nav className="text-sm text-[#1C1C1C] flex justify-between py-4 px-6 font-jakarta items-center">
        <Link href="/">
            <img src="/logo.png" alt="World Online Course logo" />
        </Link>
        <ul className="hidden lg:flex gap-14 mx-auto items-center justify-center">
            {
                navLinks.map(link => (
                    <li  key={link.href} className="hover:text-blue-700 hover:font-bold hover:text-sm transition-all duration-300 ease-in-out">
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <div className='flex gap-1 items-center'>     
            <button className='hidden lg:block px-2 py-1 lg:px-6 lg:py-3 border rounded-lg mr-4 cursor-pointer'>Login</button>
            <button className='px-2 py-1 lg:px-6 lg:py-3 border rounded-lg bg-[#1C1C1C] text-white cursor-pointer'>Signup</button>
            <div ref={hamburgerIconRef}>
                <RxHamburgerMenu className='lg:hidden text-2xl cursor-pointer' onClick={toggleMenu} />
            </div>
            {
                isOpen && 
                <div ref={menuRef} className={`absolute top-16 p-2 w-44 right-5 lg:hidden
                                            bg-white border shadow-lg
                                            transition-all duration-300 ease-in-out 
                                            opacity-100 translate-y-0
                                           `}>
                    <ul className="flex flex-col gap-3 items-center justify-center">
                        {
                            navLinks.map(link => (
                                <li key={link.href} className='hover:text-blue-700 hover:font-bold hover:border-b hover:bg-slate-200 w-full text-center p-2 transition-all duration-300'>
                                    <Link onClick={closeMenu} href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    </nav>
}