// import Image from 'next/image'
// export default function Footer(){
//     return <footer className="bg-[#1c1c1c] grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center p-6 text-white text-sm md:text-base">
//         <div className='mb-2 lg:mb-0 mx-auto'>
//             <Image src="/logo-transparent.png" width={138} height={43} alt="WOC logo"/>
//         </div>
//         <div className="text-left mx-auto grid grid-cols-1 sm:grid-cols-3 p-4 gap-6 md:gap-8">
//             <div>
//                 <h3 className='font-semibold mb-2'>Technology Inc.</h3>
//                 <p className='text-sm text-gray-300'> 
//                     90B Wherever Street<br />
//                     Gaza, Palestine <Image className='inline' src="/palestine-circular.png" width={30} height={30} alt="palestine falg" />
//                 </p>
//             </div>

//             <div>
//                 <h3 className='font-semibold mb-3'>Contact</h3>
//                 <p>
//                     <a href="tel:+1234778991" className='hover:text-gray-300 transition-colors'>+1234778991</a>
//                 </p>

//                 <p>
//                    <a href="mailto:hello@woc.com" className='hover:text-gray-300 transition-colors'>hello@woc.com</a> 
//                 </p>
//             </div>

//             <div>
//                 <h3 className='font-semibold mb-3'>Quick Links</h3>
//                 <ul>
//                     <li><a href="/faq" className='hover:text-gray-300 transition-colors'>FAQ</a></li>
//                     <li><a href="/about" className='hover:text-gray-300 transition-colors'>About Us</a></li>
//                     <li><a href="/command" className='hover:text-gray-300 transition-colors'>Command Center</a></li>
//                 </ul>
//             </div>
//         </div>

//          <div className="border-t border-white/10 text-center text-xs text-gray-500 py-4 px-6">
//                 © { new Date().getFullYear() } World Online Course. All rights reserved.
//             </div>
//     </footer>
// }

import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-white text-sm md:text-base">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center p-6 lg:p-10">
                {/* Logo */}
                <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
                    <Image src="/logo-transparent.png" width={138} height={43} alt="WOC logo" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center sm:text-left">
                    <div>
                        <h3 className="font-semibold mb-2">Yasmin Technology Inc.</h3>
                        <p className="text-sm text-gray-400">
                            Al-Wehda Street<br />
                            Gaza, Palestine{' '}
                            <Image className="inline" src="/palestine-circular.png" width={20} height={20} alt="Palestine flag" />
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <p className="text-gray-400 hover:text-white transition-colors">
                            <a href="tel:+1234778991">+1234778991</a>
                        </p>
                        <p className="text-gray-400 hover:text-white transition-colors">
                            <a href="mailto:hello@woc.com">hello@woc.com</a>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/command" className="text-gray-400 hover:text-white transition-colors">Command Center</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/10 text-center text-xs text-gray-500 py-4 px-6">
                © { new Date().getFullYear() } World Online Course. All rights reserved.
            </div>
        </footer>
    )
}