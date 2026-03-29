'use client'
import { useState } from 'react'
import Image from 'next/image'
import {testimonials} from '../data/testimonialData'
export default function TestimonialsCard(){
    const [current, setCurrent] = useState(0);

    function handlePrevious(){ 
        setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)    
    }
    
    function handleNext(){
        setCurrent(prev =>  (prev + 1) % testimonials.length)
    }

    const testimonialElement = testimonials[current];
    return (
        <div className="bg-[#F5F8FE] max-w-4xl w-full md:w-[492px] h-auto p-6 md:p-8 rounded-xl">
            <div className="flex items-center justify-between">
                <h5 className="text-[#1B1AFF] font-semibold">What they say</h5>
                
                    <div className='flex gap-3'>
                        {testimonials.map((_, index) => (
                            <button onClick={() => setCurrent(index)} aria-label={`Go to testimonial ${index + 1}`} key={index} className={`cursor-pointer w-2 h-2 rounded-full transition-colors ${current === index ? 'bg-[#6B6B6B]' : 'bg-[#D9D9D9]'}`}>
                                
                            </button> 
                        ))}
                    </div>
            </div>

            
            <div>
                <p className="font-semibold font-jakarta text-base md:text-lg text-[#1C1C1C] my-10">"{testimonialElement.quote}"</p>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <Image className="rounded-full" src={testimonialElement.image} width={45} height={45} alt="student testimonial"/>
                        <div>
                            <h5 className='font-semibold text-sm'>{testimonialElement.name}</h5>
                            <h6 className='text-xs md:text-sm text-gray-600'>{testimonialElement.role}</h6>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                            
                        <button onClick={handlePrevious} className="cursor-pointer">
                            <Image src='/previous.png' alt="" width={30} height={20}/>
                        </button>

                        <button onClick={handleNext} className="cursor-pointer">
                            <Image src='/next.png' alt="" width={30} height={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}