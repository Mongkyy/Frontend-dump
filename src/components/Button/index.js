import React from "react";

const Button = ({ title, color, onClick = () => {}}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-red-500 text-white text-center  px-6 py-4}`}>
            {title}</button>
    );
};

export default Button;
