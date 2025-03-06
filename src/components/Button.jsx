import PropTypes from "prop-types";

function Button({ text, onClick, type = "button", className = "" }) {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={` ${className}`}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
