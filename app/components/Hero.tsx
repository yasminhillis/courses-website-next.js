
import Image from "next/image"
export default function Hero(){
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-0 mt-4 gap-6 md:gap-12'>
        <div className='px-6 flex flex-col w-full md:max-w-xl order-2 md:order-1'>
          <h1 className='font-jakarta text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-bold text-[#1C1C1C] mb-6'>Search and find your best <span className="border-b-3 border-b-blue-700">courses</span> with easy way</h1>
          <p className='leading-relaxed md:leading-loose mb-6 text-sm md:text-base text-gray-600'>Discover thousands of courses designed to help you build skills, advance your career, and pursue your passions. Whether you're looking to master a new technology, develop creative abilities, or gain professional certifications, our expert-led courses provide flexible learning paths tailored to your goals. Start your learning journey today and unlock your full potential with our comprehensive online education platform.</p>

          <div className='flex flex-col mb-4 sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center'>
            <button className='w-full sm:w-[140px] h-[44px] rounded-lg bg-[#1B1AFF] text-white cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out'>Join us now!</button>
            <button className='text-[#1C1C1C] font-bold border-b border-b-[#1C1C1C] cursor-pointer hover:text-[#1B1AFF] hover:border-b-[#1B1AFF] transition-all duration-300 ease-in-out'>See all plans</button>
          </div>
        </div>

        <div className='flex justify-center items-center order-1 md:order-2'>
          <Image className='w-full h-auto max-w-115' src="/study.gif" alt="a college studnt" width={460} height={520}/>
        </div>
      </div>
    )
}