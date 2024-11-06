import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from '../Components/Heading';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/Group.png'
import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [activeView, setActiveView] = useState('cart');
    const [totalCost, setTotalCost] = useState(0);
    const [isAscending, setIsAscending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);

        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistItems(savedWishlist);
    }, []);

    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        setTotalCost(total);
    }, [cartItems]);

    const addToCart = (item) => {
        const itemExists = cartItems.some(cartItem => cartItem.product_id === item.product_id);

        if (itemExists) {
            toast("This product is already added to the cart.");
        } else {
            const updatedCart = [...cartItems, item];
            setCartItems(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            toast("Product added to cart successfully!");

            // Remove the item from the wishlist
            const updatedWishlist = wishlistItems.filter(wishlistItem => wishlistItem.product_id !== item.product_id);
            setWishlistItems(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        }
    };

    const sortCartItems = () => {
        const sortedItems = [...cartItems].sort((a, b) => isAscending ? a.price - b.price : b.price - a.price);
        setCartItems(sortedItems);
        setIsAscending(!isAscending);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCartItems([]);
        setTotalCost(0);
        localStorage.setItem('cart', JSON.stringify([]));
        navigate('/'); 
    };

    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />

            <Heading
                title='Dashboard'
                subtitle={(
                    <>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                        the coolest accessories, we have it all!
                    </>
                )}
            >
                <div>
                    <button
                        className={`w-[170px] h-[52px] border rounded-[32px] ${activeView === 'cart' ? 'bg-white text-black' : 'border-white text-white'} mr-4 mt-6`}
                        onClick={() => setActiveView('cart')}
                    >
                        Cart
                    </button>
                    <button
                        className={`w-[170px] h-[52px] border rounded-[32px] ${activeView === 'wishlist' ? 'bg-white text-black' : 'border-white text-white'}`}
                        onClick={() => setActiveView('wishlist')}
                    >
                        Wishlist
                    </button>
                </div>
            </Heading>

            <div className="mt-10 mx-auto w-11/12">
                {activeView === 'cart' ? (
                    <div>
                        <div className='flex justify-between items-center mb-10'>
                            <div>
                                <h2 className="text-2xl font-bold">Cart</h2>
                            </div>
                            <div className='flex items-center gap-10 font-bold'>
                                <h2 className='text-2xl'>Total cost: ${totalCost.toFixed(2)}</h2>
                                <button 
                                    className="btn border-2 border-purple-600 text-purple-600 rounded-3xl" 
                                    onClick={sortCartItems}
                                >
                                    Sort by price <i className="fa-solid fa-sliders transform rotate-90"></i>
                                </button>
                                <button 
                                    className="btn bg-purple-600 text-white rounded-3xl" 
                                    onClick={handlePurchase}
                                    disabled={cartItems.length === 0 || totalCost === 0}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>

                        {cartItems.length === 0 ? (
                            <p className='text-3xl font-semibold text-black text-center'>No items in the cart</p>
                        ) : (
                            <ul>
                                {cartItems.map((item) => (
                                    <div key={item.product_id} className="flex justify-between border p-4 mb-2 rounded-lg">
                                        <div className='flex gap-10'>
                                            <img src={item.product_image} alt={item.product_title} className="w-52 h-32 rounded-lg object-cover" />
                                            <div className='flex flex-col justify-evenly'>
                                                <h3 className='font-semibold text-2xl'>{item.product_title}</h3>
                                                <p className='text-gray-400'>{item.description}</p>
                                                <p className='font-semibold text-xl'>Price: ${item.price}</p>
                                            </div>
                                        </div>
                                        <i className="fa-regular fa-circle-xmark text-red-500 text-3xl"></i>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2 className="text-2xl font-bold mb-10">Wishlist</h2>
                        {wishlistItems.length === 0 ? (
                            <p className='text-3xl font-semibold text-black text-center'>No items in the wishlist</p>
                        ) : (
                            <ul>
                                {wishlistItems.map((item) => (
                                    <div key={item.product_id} className="flex justify-between border p-4 mb-2 rounded-lg">
                                        <div className='flex gap-10'>
                                            <img src={item.product_image} alt={item.product_title} className="w-72 h-48 rounded-lg object-cover" />
                                            <div className='flex flex-col justify-evenly'>
                                                <h3 className='font-semibold text-2xl'>{item.product_title}</h3>
                                                <p className='text-gray-400'>{item.description}</p>
                                                <p className='font-semibold text-xl'>Price: ${item.price}</p>
                                                <button className="btn w-32 bg-purple-600 text-white rounded-3xl" onClick={() => addToCart(item)}>Add to Cart</button>
                                            </div>
                                        </div>
                                        <i className="fa-regular fa-circle-xmark text-red-500 text-3xl"></i>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center flex flex-col items-center">
            <img src={image} className="mb-4 w-24 h-24 object-cover rounded-full" alt="Celebration"/>
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">Your purchase was successful.</p>
            <button className="btn bg-purple-600 text-white rounded-3xl px-6 py-2 mt-4" onClick={closeModal}>Close</button>
        </div>
    </div>
)}

        </div>
    );
};

export default Dashboard;