import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import bannerImg from '../assets/banner.jpg';

const Navbar = ({ cartCount, wishlistCount }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    // State to manage cart card visibility
    const [showCartCard, setShowCartCard] = useState(false);
    const [totalCost, setTotalCost] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from local storage when component mounts
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    // Calculate total cost whenever cartItems change
    useEffect(() => {
        const cost = cartItems.reduce((total, item) => total + item.price, 0);
        setTotalCost(cost);
    }, [cartItems]);

    // Toggle cart card visibility when cart icon is clicked
    const handleCartClick = () => {
        setShowCartCard((prev) => !prev);
    };

    return (
        <div className='m-6'>
            <nav
                className={`p-4 ${isHomePage
                    ? 'bg-purple-600 text-white rounded-t-3xl'
                    : 'text-black rounded-none'
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <Link to={`/`} className="text-2xl font-bold">Gadget Heaven</Link>

                    <ul className="flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-gray-300')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/statictics"
                            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-gray-300')}
                        >
                            Statistics
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-gray-300')}
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/announcementbanner"
                            className={({ isActive }) => (isActive ? 'text-yellow-500' : 'hover:text-gray-300')}
                        >
                            AnnouncementBanner
                        </NavLink>
                    </ul>

                    <div className="flex relative space-x-3">
                        <div>
                            <i
                                className="fa-solid fa-cart-shopping border border-gray-400 rounded-full p-2 cursor-pointer"
                                onClick={handleCartClick}
                            >
                                <span className="absolute -translate-y-3 bg-red-500 text-white rounded-full text-xs px-1">
                                    {cartCount}
                                </span>
                            </i>

                            {/* Card that appears over the cart icon */}
                            {showCartCard && (
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-lg w-36 z-50 p-3 border flex justify-center gap-4 flex-col">
                                    <span className='text-black font-semibold text-xl'>Cost: ${totalCost.toFixed(2)}</span>
                                    <Link to={`/dashboard`}
                                        onClick={() => showCartCard(false)}
                                        className="bg-white text-purple-400 hover:text-purple-600 transition"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <i className="fa-regular fa-heart border border-gray-400 rounded-full p-2">
                                <span className="absolute -translate-y-3 bg-red-500 text-white rounded-full text-xs px-1">
                                    {wishlistCount}
                                </span>
                            </i>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                {isHomePage && (
                    <section className="relative bg-purple-600 rounded-b-3xl text-white py-16">
                        {/* Hero Section */}
                        <div className="container mx-auto text-center px-4 pb-32">
                            <h2 className="text-4xl font-bold mb-4">Upgrade Your Tech Accessories</h2>
                            <p className="text-lg mb-6">
                                Explore the latest gadgets that will take your experience to the next level.
                                <br /> From smart devices to the coolest accessories, we have it all!
                            </p>
                            <Link to='/dashboard' className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
                                Shop Now
                            </Link>
                        </div>
                        <div className="border-2 border-white p-3 absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 h-5/6 w-3/5 bg-white bg-opacity-50 rounded-3xl overflow-hidden shadow-lg">
                            <img src={bannerImg} alt="VR Headset" className="rounded-2xl w-full h-full object-cover" />
                        </div>
                    </section>
                )}
            </div>
            {isHomePage && <div className="h-32"></div>}
        </div>
    );
};

export default Navbar;
