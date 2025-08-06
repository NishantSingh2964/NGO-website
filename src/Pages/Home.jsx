import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../Assests/image-hero.jpg";
import midImage from "../Assests/pic4.jpg";
import pic3 from "../Assests/pic3.jpg"
import pic5 from "../Assests/pic5.jpeg"
import CountUp from 'react-countup';
import pic6 from "../Assests/pic6.jpeg"
import { useInView } from "react-intersection-observer";

export default function Home() {
    return (
        <div className="space-y-0.5">
            <section
                className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

                <div className="relative z-10 px-4">
                    <h1 className="text-[40px] sm:text-[40px] md:text-[60px] lg:text-[80px] leading-tight font-extrabold mb-6 drop-shadow-xl mt-16">
                        Basti Ki Pathshala
                        <br /> Foundation
                    </h1>
                    <p className="text-sm sm:text-sm max-w-3xl mx-auto drop-shadow-md leading-relaxed pr-8 text-white opacity-60">
                        Join us in our mission to break the barriers of education in underserved communities.
                        With your support, we can provide quality education to children living in slum areas,
                        empowering them with the knowledge and skills they need to build a brighter future.
                        Together, let's make a difference. Take action today and be a part of the change!
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link
                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded font-semibold"
                            to="/donate"
                        >
                            Donate Now
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative z-20 -mt-80 flex gap-12">
                <div className="bg-white rounded-xl shadow-2xl max-w-6xl mx-auto px-6 py-8 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-[35%] border-l-2">
                        <img
                            src={midImage}
                            alt="About Us"
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-full md:w-[65%] flex flex-col gap-6">
                        <p className="text-md uppercase text-gray-500 font-bold mt-0 mb-3 tracking-wider">
                            About Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 leading-tight mb-6">
                            Lighting the Path to Change with Basti Ki Pathshala Foundation
                        </h2>
                        <div className="space-y-5 text-[12px] text-gray-500 leading-relaxed">
                            <p>
                                At Basti Ki Pathshala Foundation, we are more than just an organization – we are a movement, driven by the belief that education is the cornerstone of empowerment. Established under the Indian Societies Act of 1860, we stand as a beacon of hope in underserved communities, dedicated to breaking the chains of poverty through the transformative power of learning.
                            </p>
                            <p>
                                Join us in our quest to rewrite the narrative of education, one success story at a time. Together, let’s build a world where every child has the opportunity to dream, to learn, and to soar. Welcome to Basti Ki Pathshala Foundation – where hope is our currency, and education is our legacy.
                            </p>
                        </div>
                        <Link
                            to="/donate"
                            className="inline-block w-28 mt-6 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded font-semibold transition"
                        >
                            Donate
                        </Link>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-xl flex flex-col md:flex-row items-center gap-10 mt-16 animate-fade-in">
                <div className="w-full md:w-[55%] space-y-6">
                    <h2 className="text-4xl font-extrabold text-black-900 mb-4 border-l-4 border-yellow-400 pl-4">
                        Why Education Matters
                    </h2>
                    <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                        <div className="hover:bg-blue-50 p-4 rounded transition">
                            <h3 className="font-semibold text-xl text-black-700 mb-2">
                                Breaking the Cycle of Poverty
                            </h3>
                            <p className="text-sm text-gray-500">
                                Education offers underprivileged slum children a pathway out of poverty by providing them with the knowledge and skills necessary to secure better opportunities in the future. By empowering them with education, these children can break the intergenerational cycle of poverty and create a brighter future for themselves and their families.
                            </p>
                        </div>
                        <div className="hover:bg-blue-50 p-4 rounded transition">
                            <h3 className="font-semibold text-xl text-black-800 mb-2">
                                Empowerment & Self-Improvement
                            </h3>
                            <p className="text-sm text-gray-500">
                                Education empowers slum children to envision a life beyond their current circumstances. It instills in them a sense of self-worth and confidence, enabling them to dream big and pursue their aspirations. Through education, these children gain the tools to advocate for themselves, make informed decisions, and strive for a better quality of life.
                            </p>
                        </div>
                        <div className="hover:bg-blue-50 p-4 rounded transition">
                            <h3 className="font-semibold text-xl text-black-800 mb-2">
                                Building Resilience & Hope
                            </h3>
                            <p className="text-sm text-gray-500">
                                Education offers slum children a sense of hope and resilience in the face of adversity. It equips them with the skills to overcome challenges and navigate the complexities of their environment. By investing in their education, we provide these children with a beacon of hope, showing them that a brighter future is possible, no matter where they come from.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[45%]">
                    <img
                        src={pic3}
                        alt="Why Education Matters"
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="bg-[#fdf9f3] py-16 w-full flex flex-col md:flex-row items-center gap-8">

                <div className="w-full md:w-1/2">
                    <img
                        src={pic5}
                        alt="Join Our Team"
                        className="shadow-md w-full max-h-[640px] object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 px-6 md:px-12 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                        JOIN OUR <br />
                        <span className="text-yellow-500">TEAM</span>
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Whether you're a seasoned educator, a community organizer, or someone with a heart for social impact, there’s a place for you in our team.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Join us in this rewarding journey of transformation. Together, let’s pave the way for brighter tomorrows and empower futures, one child at a time.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link to="/donate" className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold transition">
                            Donate Now
                        </Link>
                        <Link to="/about" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold transition">
                            About Us
                        </Link>
                    </div>
                </div>

            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-extrabold text-black-800 text-center mb-2">Intern Insights</h2>
                <p className="text-center text-gray-600 text-lg mb-10">Hear from Our Valued Team Members</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {[
                        { name: "Kanika Rajput", img: "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg" },
                        { name: "Shreya Gupta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7sUtJI6xZ2eEUiL12FK2ZF6WvkFNB-AMtg&s" },
                        { name: "Pooja Arora", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknLfoxKk38a2ZQqRDYUSIX_GxPK4qLub1Bw&s" },
                    ].map((intern, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300 ease-in-out"
                        ><p className="text-gray-700 italic mb-4">
                                “As an intern at Basti Ki Pathshala Foundation, I've been truly inspired by the dedication of the team and the impact we're making in underserved communities. It's been an eye-opening experience to witness firsthand the transformation that education can bring to the lives of children living in slum areas. I'm grateful for the opportunity to contribute to such meaningful work and to be a part of this incredible journey.”
                            </p>
                            <img
                                src={intern.img}
                                alt={intern.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                            />
                            <p className="font-bold text-black-700">{`– ${intern.name}`}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="relative w-full bg-cover bg-center bg-no-repeat text-white py-20"
                style={{
                    backgroundImage: `url(${pic6})`,
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

                        {[
                            { label: "Life Changed", value: 31245 },
                            { label: "Meals Served", value: 28976 },
                            { label: "Interns", value: 19854 },
                            { label: "Supporters", value: 10989 },
                        ].map((item, idx) => {
                            const { ref, inView } = useInView({ triggerOnce: true });

                            return (
                                <div key={idx} ref={ref}>
                                    <div className="text-5xl font-extrabold text-yellow-400">
                                        {inView ? (
                                            <CountUp end={item.value} duration={3} separator="," />
                                        ) : (
                                            "0"
                                        )}
                                    </div>
                                    <p className="mt-2 text-lg font-semibold">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
