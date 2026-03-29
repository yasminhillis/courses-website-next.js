import Image from 'next/image'
export default function Commitment(){
    return (
        <section className="px-6 py-8 md:px-8 md:py-16 mx-auto max-w-6xl">
            <div className='grid md:grid-cols-2 gap-8 md:gap-12 justify-items-center items-center'>
                <Image className='w-full max-w-[330px] h-auto' alt="student working on laptop" src="/online-learning.gif" width={330} height={330}/>
                <div>
                    <h2 className='text-[#1C1C1C] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>We are committed to helping you in the process of achieving your dreams</h2>
                    <p className='my-4 md:my-8 text-sm md:text-base leading-relaxed text-gray-600'>
                        Whether you're just starting out or looking to level up your career, our expert-led courses are designed to meet you where you are. Learn at your own pace, with real-world projects and mentors who've been in your shoes.
                    </p>
                    <button className='w-full sm:w-auto bg-[#1B1AFF] hover:bg-blue-600 transition-colors duration-300 ease-in-out text-white px-6 py-3 rounded-lg cursor-pointer'>See details</button>

                </div>
            </div>
        </section>
    )
}