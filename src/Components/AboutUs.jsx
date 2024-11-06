import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div>
            {/* About Us Section */}
            <section className="my-12 px-6 py-8 bg-purple-600 rounded-lg text-white shadow-md">
                <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
                <p className="text-center max-w-2xl mx-auto">
                    Welcome to Gadget Heaven! We are passionate about bringing you the latest tech gadgets at unbeatable prices. Founded in [Year], our mission is to make technology accessible for everyone, with a focus on customer satisfaction, innovation, and integrity.
                </p>
            </section>

            {/* Blog Section */}
            <section className="my-12 px-6 py-8 bg-purple-600 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-white mb-6">From Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: "How to Choose the Best Laptop", description: "Find the right laptop for your needs with our comprehensive guide." },
                        { title: "Top Gadgets for 2024", description: "Explore the latest and greatest tech innovations for the year ahead." },
                        { title: "Maximize Your Tech Experience", description: "Enhance your productivity with these simple tech tips and tricks." },
                        { title: "Gadget Care Essentials", description: "Learn how to keep your gadgets in top condition for years to come." },
                        { title: "Smart Home Devices Worth Trying", description: "Discover the best smart devices to make your home more efficient." },
                        { title: "Choosing the Right Smartphone", description: "Compare top smartphone models to find the best fit for your lifestyle." },
                    ].map((post, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-lg hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold text-purple-600">{post.title}</h3>
                            <p className="mt-2 text-gray-700">{post.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AnnouncementBanner;
