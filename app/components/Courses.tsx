import Course from './Course'
import {courseData} from '../data/courseData';

export default function Courses(){
    return (
        <section className="py-12 md:py-16">
            <div className='max-w-6xl mx-auto px-6'>
                <h2 className="mb-5 md:mb-7 lg:mb-10 text-center font-bold font-jakarta text-2xl md:text-3xl lg:text-4xl">Our best courses for you</h2>
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        courseData.map(course => (
                            <Course 
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                src={course.icon}
                            />
                    ))}
                </div>
            </div>
        </section>
    )
}