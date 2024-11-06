import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";



const MainLayout = () => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const updateWishlistCount = (count) => {
        setWishlistCount(count);
    };

    // Load initial cart count from localStorage
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartCount(cartItems.length);

        // Load initial wishlist count from localStorage
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistCount(wishlistItems.length);
    }, []);

    // Function to update cart count
    const updateCartCount = (newCount) => {
        setCartCount(newCount);
    };

    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
            <Outlet context={{ cartCount, updateCartCount, updateWishlistCount }} />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                theme="colored"></ToastContainer>
            <Footer />
        </div>
    );
};


export default MainLayout;