import Image from 'next/image'
export default function CTA() {
  return (
    <section className="bg-[#1B1AFF] font-jakarta overflow-hidden relative py-6 md:py-24">
        <div className='absolute inset-0'>
            <Image className='object-cover' src='/mask.svg' fill alt="mask"/>
        </div>

        <div className='relative max-w-5xl flex flex-col gap-4 mx-auto md:gap-8 justify-center items-center text-center text-white font-bold h-full z-10'>
            <h2 className='text-xl sm:text-2xl md:text-4xl leading-tight'>Join 3000+ participants worldwide and achieve your dream!</h2>
            <button className='bg-[#1C1C1C] hover:bg-gray-800 transition-colors text-white px-3 py-1.5 md:px-8 md:py-4 rounded-lg text-base md:text-lg cursor-pointer'>Join us  now!</button>
        </div>
    </section>
  );
}
