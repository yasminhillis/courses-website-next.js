import Image from 'next/image'

export default function Collaboration(){
    return (
        <section className="bg-[#F5F8FE]  w-full py-16 md:py-24 text-center">
            <div className='text-center px-6'>
                <h2 className="font-jakarta text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Collaborate with 100+ leading universities and companies</h2>
                <p className="text-[#9F9F9F] text-sm md:text-base max-w-2xl mx-auto">WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation</p>
            </div>
            <div className='mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center items-center gap-12 max-w-5xl mx-auto'>
                <Image className='bg-red-100' src="/logo-1.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/logo-2.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/logo-3.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/logo-4.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/aqsa-uni.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/logo-6.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/IUG.png" alt="company logo" width={60} height={37}/>
                <Image className='bg-red-100' src="/aug.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/logo-9.png" alt="company logo" width={90} height={37}/>
                <Image className='bg-red-100' src="/logo-10.png" alt="company logo" width={90} height={37}/>
            </div>
        </section>
    )
}

