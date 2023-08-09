import React from "react";
import PropTypes from "prop-types";
import { store } from "../../src/store/store";
import { Provider } from "react-redux"

export const ProviderWrapper = ({ children }) => {
    return <Provider store={ store }>{children}</Provider>
};

ProviderWrapper.propTypes = {
    children: PropTypes.node.isRequired
};