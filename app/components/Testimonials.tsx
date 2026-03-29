import TestimonialHeading from "./TestimonialHeading";
import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials(){
    return <section className="py-12 px-6 md:py-16">
        <div className="max-w-5xl mx-auto grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-[auto_1fr] items-center justify-items-center">
            <TestimonialHeading />
            <TestimonialsCard />
        </div>
    </section>
}
