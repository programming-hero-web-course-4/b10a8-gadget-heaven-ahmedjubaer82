const Footer = () => {
    return (
        <div>
            <div className="text-center mb-10 border-b-2 py-5 pt-16 bg-white">
                <h2 className="text-[32px] font-bold">AJ Gadgets</h2>
                <p className="text-[#6C6B6F]">Leading the way in cutting-edge technology and innovation</p>
            </div>
            <footer className="footer justify-evenly p-10">
                <nav>
                    <h6 className="mb-2 text-[20px] font-bold text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="font-bold mb-2 text-[20px] text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="font-bold mb-2 text-[20px] text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;