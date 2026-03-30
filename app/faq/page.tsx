'use client'
import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: FAQItem[] = [
        {
            question: "How do I enroll in a course?",
            answer: "Simply browse our course catalog, select the course you're interested in, and click 'Learn more'. You'll be guided through the enrollment process, which takes just a few minutes."
        },
        {
            question: "Can I learn at my own pace?",
            answer: "Absolutely! All our courses are self-paced. You can start, pause, and resume your learning whenever it fits your schedule. Course materials remain accessible even after completion."
        },
        {
            question: "What if I'm not satisfied with a course?",
            answer: "We offer a 30-day money-back guarantee on all courses. If you're not satisfied within the first 30 days, contact our support team for a full refund."
        },
        {
            question: "Do I get a certificate upon completion?",
            answer: "Yes! Upon successfully completing a course, you'll receive a certificate of completion that you can share on LinkedIn, add to your resume, or showcase to employers."
        },
        {
            question: "Are there any prerequisites for courses?",
            answer: "Prerequisites vary by course. Each course page clearly lists any required knowledge or skills. Many beginner courses have no prerequisites at all."
        },
        {
            question: "How long do I have access to course materials?",
            answer: "You get lifetime access to all course materials, including any future updates. Learn at your own pace and revisit content whenever you need a refresher."
        },
        {
            question: "Can I download course materials?",
            answer: "Yes, most course materials including videos, PDFs, and resources can be downloaded for offline viewing. Check individual course pages for specific details."
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes! Our mobile app is available on both iOS and Android, allowing you to learn on the go. All your progress syncs seamlessly across devices."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and offer installment payment plans for select courses. All transactions are secure and encrypted."
        },
        {
            question: "Do you offer corporate training?",
            answer: "Yes! We offer customized corporate training solutions for teams. Contact our business team to discuss your organization's needs and get a tailored quote."
        }
    ];

    return (
        <main className="min-h-screen font-jakarta">
            {/* Hero Section */}
            <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-blue-100 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Find answers to common questions about our courses, platform, and learning experience.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-12 md:py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-6 flex justify-between items-center hover:bg-blue-50 transition-colors cursor-pointer"
                                >
                                    <h3 className="text-base md:text-lg font-semibold text-[#1C1C1C] pr-4">
                                        {faq.question}
                                    </h3>
                                    <span className="text-2xl text-[#1B1AFF] flex-shrink-0">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-[#F5F8FE] py-12 md:py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-base text-gray-600 mb-6">
                        Our support team is here to help. Reach out and we'll get back to you within 24 hours.
                    </p>
                    <a 
                        href="mailto:hello@woc.com"
                        className="inline-block bg-[#1B1AFF] text-white px-4 py-2 rounded-lg  text-sm lg:text-base font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Contact Support
                    </a>
                </div>
            </section>
        </main>
    );
}