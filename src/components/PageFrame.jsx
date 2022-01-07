import React from 'react';
import "./PageFrame.css";

export const PageFrame = (props) => {
    return (
        <div className="page-frame">
            {props.children}
        </div>
    )
}
