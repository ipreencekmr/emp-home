import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope, faFemale, faMale 
} from "@fortawesome/free-solid-svg-icons";

export const EmployeeCard = () => {
    return (
        <div className="p-2">
            <div className="card" style={{
                width: "18rem"
            }}>
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between flex-nowrap">
                        <a href="/update/1" className="btn btn-outline-secondary">Edit</a>
                        <span className="text-muted">B.Sc IT</span>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Prince Kumar Sharma</h5>
                    <h6 className="card-subtitle mb-2 text-muted">IT Department</h6>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon icon={ faMale }></FontAwesomeIcon> 
                        <FontAwesomeIcon icon={ faFemale }></FontAwesomeIcon> 
                        <p className="card-text text-uppercase px-2">Male</p>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <FontAwesomeIcon className="me-2" icon={ faEnvelope }></FontAwesomeIcon>
                    <span 
                        style={{
                            fontSize: "0.7rem"
                        }}>
                            ipreencekmr@gmail.com
                    </span>
                </div>
            </div>
        </div>
    );
};