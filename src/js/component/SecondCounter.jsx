// Importa React y Font Awesome
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

// Componente SecondsCounter
const SecondsCounter = ({ seconds }) => {
    
    const digits = seconds.toString().padStart(6, "0").split("");

    return (
        <div className="counter-container">
            <div className="digit clock-icon">
                <FontAwesomeIcon icon={faClock} />
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
    );
};

export default SecondsCounter;
