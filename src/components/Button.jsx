import PropTypes from "prop-types";

function Button ({ text, onClick }) {
    return <button onClick={onClick} className="bg-green-400">{ text }</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;