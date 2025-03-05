import React from "react";

function Button ({ text, onClick }) {
    return <button onClick={onClick} className="bg-green-400">{ text }</button>;
}

export default Button;
