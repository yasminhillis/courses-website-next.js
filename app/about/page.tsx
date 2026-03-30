import Image from 'next/image';
import Link from 'next/link';
import CTA from '../components/CTA'
export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-blue-100 to-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight">
                        About World Online Course
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to make quality education accessible to everyone, everywhere. 
                        Join thousands of learners transforming their careers through expert-led online courses.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-12 md:py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <Image 
                            src="/student1.png" 
                            width={500} 
                            height={500} 
                            alt="Students learning online"
                            className="w-full max-w-[400px] h-auto mx-auto"
                        />
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1C1C] mb-4 leading-tight">
                                Our Mission
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                                We believe that education should have no boundaries. Our platform brings together 
                                industry experts and passionate learners to create transformative learning experiences.
                            </p>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                Whether you're looking to switch careers, upgrade your skills, or explore a new passion, 
                                we provide the tools, mentorship, and community to help you succeed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-[#F5F8FE] py-12 md:py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1C1C] text-center mb-10 md:mb-12">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white p-6 rounded-lg">
                            <div className="w-12 h-12 bg-[#1B1AFF] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-2xl font-bold">Q</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">Quality First</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Every course is crafted by industry experts and continuously updated to reflect 
                                the latest trends and best practices.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg">
                            <div className="w-12 h-12 bg-[#1B1AFF] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-2xl font-bold">A</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">Accessibility</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Learn at your own pace, from anywhere in the world. Education should fit your 
                                schedule, not the other way around.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg">
                            <div className="w-12 h-12 bg-[#1B1AFF] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-white text-2xl font-bold">C</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">Community</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Join a global network of learners and mentors who support each other's 
                                growth and celebrate successes together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 md:py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-[#1B1AFF] mb-2">3000+</div>
                            <p className="text-sm md:text-base text-gray-600">Active Students</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-[#1B1AFF] mb-2">100+</div>
                            <p className="text-sm md:text-base text-gray-600">Expert Instructors</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-[#1B1AFF] mb-2">50+</div>
                            <p className="text-sm md:text-base text-gray-600">Courses</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-[#1B1AFF] mb-2">95%</div>
                            <p className="text-sm md:text-base text-gray-600">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
}