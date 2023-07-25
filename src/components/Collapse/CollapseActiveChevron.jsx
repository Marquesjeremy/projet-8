import React, { useState, useEffect, useRef } from "react";

const chevron = <i className="fa-solid fa-chevron-up"></i>;

const Collapse = ({ text, title }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        setContentHeight("200px");
        setChevronRotation(isCollapsed ? 0 : -180);
    }, [isCollapsed]);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [chevronRotation, setChevronRotation] = useState(0);

    return (
        <div className="collapse-container">
            <button onClick={handleToggle} className="toggle-btn">
                <p>{title}</p>
                <span className="chevron-icon" 
                    style={{ transform: `rotate(${chevronRotation}deg)`, transition: 'transform 0.5s' }}>
                {chevron}
                </span>
            </button>
            <div
                className={`collapse-content ${isCollapsed ? "collapsed" : ""}`}
                style={{ maxHeight: isCollapsed ? 0 : contentHeight }}
                ref={contentRef}>
                <div className="content-inner" ref={contentRef}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Collapse;

