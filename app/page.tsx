import Image from 'next/image'
import Collaboration from './components/Collaboration';
import Hero from './components/Hero'
import Commitment from './components/Commitment'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials';
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='font-jakarta'>
      <Hero />
      <Collaboration />
      <Commitment />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}