import PropTypes from "prop-types";

function Button({ text, onClick, type = "button", variant = "primary", className = "" }) {
    const baseStyles = "border-2 rounded-lg px-4 py-2 text-lg font-semibold font-inherit transition-all duration-300 cursor-pointer focus:outline-none bg-[#34ad15] text-white border-transparent shadow-md hover:bg-[#2b8e12] hover:border-[#2b8e12] hover:scale-105 focus:border-white focus:shadow-[0_0_8px_rgba(52,173,21,0.8)]";

    const variantStyles = {
        primary: "bg-[#34ad15] text-white border-transparent shadow-md hover:bg-[#2b8e12] hover:border-[#2b8e12] hover:scale-105 focus:border-white focus:shadow-[0_0_8px_rgba(52,173,21,0.8)]",
        secondary: "bg-[#34ad15] text-white border-transparent shadow-md hover:bg-[#2b8e12] hover:border-[#2b8e12] hover:scale-105 focus:border-white focus:shadow-[0_0_8px_rgba(52,173,21,0.8)] w-full"
    };

    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    className: PropTypes.string,
};

export default Button;
