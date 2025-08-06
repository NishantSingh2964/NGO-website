import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../Assests/image-hero.jpg";
import missionImage from "../Assests/pic1.jpeg"
import ourStoryImage from "../Assests/pic2.jpeg"
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

export default function AboutUs() {
    return (
        <div className="text-[#222] font-[Arial] leading-relaxed">
            <section
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
                        About Us
                    </h1>
                    <p className="text-sm sm:text-lg">
                        <Link to="/" className="hover:underline text-gray-200">
                            <span className="text-yellow-400">Home &gt;</span>
                        </Link>
                        About Us
                    </p>
                </div>

            </section>

            <section className="w-full bg-red-50 px-4 py-20 sm:px-10 md:px-20">
                <div className="max-w-5xl mx-auto text-center space-y-16">
                    <h2 className="text-5xl font-extrabold text-black">We Work Together</h2>
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                        At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do.
                        Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action.
                        Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities.
                        Together, we strive towards a common goal: to empower every child with the opportunity to thrive.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center font-semibold text-xl mt-10">
                        {[
                            { label: "Lives Changed", value: 31245 },
                            { label: "Meals Served", value: 28976 },
                            { label: "Interns", value: 19854 },
                            { label: "Supporters", value: 10989 },
                        ].map((item, idx) => (
                            <InView key={idx} triggerOnce threshold={0.3}>
                                {({ inView, ref }) => (
                                    <div ref={ref}>
                                        <div className="text-5xl font-extrabold text-black-700">
                                            {inView ? <CountUp end={item.value} duration={2.5} separator="," /> : 0}
                                        </div>
                                        <div className="mt-2 text-black">{item.label}</div>
                                    </div>
                                )}
                            </InView>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 sm:px-8 md:px-20 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6">
                            Our Mission: A succinct statement outlining the core purpose and goals of your organization
                        </h2>

                        <p className="text-[12px] sm:text-[15px] text-gray-500 leading-relaxed">
                            At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities.
                            We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed.
                            Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential.
                            Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities.
                            Our mission extends beyond the classroom as we work tirelessly to bridge the educational gap and foster long-term, sustainable change in the lives of marginalized families.
                            Together, we strive to rewrite the narrative of education, one child at a time.
                        </p>
                    </div>
                    <div>
                        <img
                            src={missionImage}
                            alt="Our Mission"
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-white px-4 sm:px-8 md:px-20 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src={ourStoryImage}
                            alt="Our Mission"
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6">
                            Our Story
                        </h2>

                        <p className="text-[12px] sm:text-[15px] text-gray-500">
                            Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education.
                            Founded under the Indian Societies Act of 1860, our journey started with a belief in the potential of every child.
                        </p>
                        <br />
                        <p className="text-[12px] sm:text-[15px] text-gray-500">
                            It all began when Sunita, driven by a passion for social justice, began addressing educational inequalities in underserved communities.
                            Armed with compassion, she rallied a team of like-minded individuals who shared her vision.
                        </p>
                        <br />
                        <p className="text-[12px] sm:text-[15px] text-gray-500">
                            From humble beginnings, our organization has grown into a beacon of hope. Each milestone achieved, each barrier overcome, has only strengthened our resolve to continue our mission of empowerment and transformation.
                        </p>
                        <br />
                        <p className="text-[12px] sm:text-[15px] text-gray-500">
                            We’ve witnessed the transformative power of education firsthand—watching shy children blossom into confident individuals and communities unite with a shared commitment to a better future.
                        </p>
                        <br />
                        <p className="text-[12px] sm:text-[15px] text-gray-500">
                            As we reflect on our journey, we are filled with gratitude for the unwavering support of our volunteers, donors, partners, and the communities we serve.
                            Our story continues, with each chapter filled with hope, resilience, and determination.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
