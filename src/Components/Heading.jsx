const Heading = ({ title, subtitle, children }) => {
    return (
        <div className="bg-[#9538E2] h-72 text-center p-5 ">
            <h2 className="text-[32px] font-bold text-[#FFFFFF]">{title}</h2>
            <p className="text-[16px] font-normal text-[#FFFFFF] whitespace-pre-line">{subtitle}</p>
            <div className="mt-4">{children}</div> 
        </div>
    );
};

export default Heading;
