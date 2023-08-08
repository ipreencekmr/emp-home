import React from "react";
import PropTypes from "prop-types";

export const ErrorBanner = ({ message }) => {
    return (<div className="alert alert-danger text-center m-2" role="alert">
        {message}
    </div>)
};

ErrorBanner.propTypes = {
    message: PropTypes.string
};

ErrorBanner.defaultProps = {
    message: "Something went wrong!"
};