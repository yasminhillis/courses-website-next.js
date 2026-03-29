import Image from 'next/image'
export default function TestimonialHeading(){
    return <div>
        <Image className='mb-4' src="/qoute.png" alt="qoute" width={40} height={32} />
        <h2 className='font-bold text-xl md:text-3xl lg:text-4xl mb-4 text-[#1C1C1C]'>What they say about WOC</h2>
        <p className='text-sm md:text-base text-gray-600 leading-relaxed'>More than 3000 users have been helped by World Online Course.</p>
    </div>
}