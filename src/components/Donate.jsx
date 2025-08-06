import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../Assests/image-hero.jpg";
import pic3 from "../Assests/pic5.jpeg"

export default function Donate() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        amount: "",
        message: "",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setForm({ name: "", email: "", amount: "", message: "" });
        setTimeout(() => setShowPopup(false), 5000);
    };

    return (
        <div className="flex flex-col w-full">
            <section
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
                        Support Our Cause
                    </h1>
                    <p className="text-sm sm:text-lg">
                        <Link to="/" className="text-yellow-400 hover:underline">
                            Home
                        </Link>{" "}
                        &gt; Donate
                    </p>
                </div>
            </section>

            <section className="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">


                    <div className="w-full">
                        <img
                            src={pic3}
                            alt="Empowering Children"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold text-black-700 mb-4">
                            Empowering Dreams, <br /> One Donation at a Time
                        </h2>
                        <p className="text-md text-gray-700 mb-6">
                            Together, we can provide these children with the tools and opportunities
                            they need to break free from the cycle of poverty and build a brighter
                            future. Your support not only fuels our educational initiatives but also
                            ignites a sense of possibility and hope within each child we reach.
                        </p>
                        <p className="text-md text-gray-700">
                            Every contribution, no matter how big or small, makes a significant impact
                            on the lives of these children. Your generosity helps us create a ripple
                            effect of positive change, uplifting entire communities and shaping a
                            better tomorrow for generations to come. Thank you for standing with us
                            in our mission to make a difference in the lives of those who need it most.
                        </p>
                    </div>

                </div>
            </section>

            <section className="max-w-3xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-black-700 mb-6 text-center">Make a Donation</h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white shadow-lg p-8 rounded-lg border"
                >
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        required
                    />
                    <input
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        placeholder="Amount (INR)"
                        className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        required
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Message (Optional)"
                        rows="4"
                        className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-600 transition"
                    >
                        Donate Now
                    </button>
                </form>
            </section>

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white text-yellow-600 px-10 py-8 rounded-xl shadow-2xl text-center max-w-md w-full animate-fade-in">
                        <h3 className="text-2xl font-bold mb-2">🙏 Thank You!</h3>
                        <p className="text-lg">We truly appreciate your generosity.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
