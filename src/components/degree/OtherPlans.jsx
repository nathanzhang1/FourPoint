import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/degree/OtherPlans.module.css";

export default function OtherPlans({ plans }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleToggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
      };

    const handleNavigateToPlan = (planId) => {
        navigate(`/plan/${planId}`);
        setShowDropdown(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false)
        }
    };

    useEffect(() => {
        if (showDropdown) {
          document.addEventListener('mousedown', handleClickOutside);  // Attach event listener
        } else {
          document.removeEventListener('mousedown', handleClickOutside);  // Cleanup listener when dropdown is closed
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);  // Cleanup on component unmount
        };
      }, [showDropdown]);

    return (
        <div className={styles.otherPlansContainer} ref={dropdownRef}>
            <svg onClick={handleToggleDropdown} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            {showDropdown && (
                <div className={styles.otherPlansDropdown}>
                    {plans.map((p) => (
                        <div key={p.id} onClick={() => handleNavigateToPlan(p.id)}>
                            {p.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}