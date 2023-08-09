import React from "react";
export const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-secondary m-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary m-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary m-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};