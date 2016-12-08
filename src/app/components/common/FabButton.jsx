
import React from "react";

/**
 *
 * @param {Function} onClick
 * @returns {React.Component}
 * @constructor
 */
const FabButton = ({onClick}) => {

    return (
        <div style={{
            position: "fixed",
            right: 15,
            bottom: 30,
            zIndex: 100
        }}>
            <button
                onClick={onClick}
                className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
            </button>
        </div>);
};

export  default FabButton;