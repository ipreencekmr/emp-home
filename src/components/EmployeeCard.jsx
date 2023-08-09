import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope, faFemale, faMale, faTransgender 
} from "@fortawesome/free-solid-svg-icons";

export const EmployeeCard = ({ employee }) => {
    return (
        <div className="p-2">
            <div className="card" style={{
                width: "18rem"
            }}>
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between flex-nowrap">
                        <a href={ `/update/${employee.id}` } 
                            className="btn btn-outline-secondary">Edit</a>
                        <span className="text-muted">{employee?.qualification?.value}</span>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{employee?.department?.value}</h6>
                    <div className="d-flex align-items-center">
                        {
                            employee?.gender === "MALE" ? 
                                <FontAwesomeIcon icon={ faMale }></FontAwesomeIcon> : 
                                employee?.gender === "FEMALE" ? 
                                    <FontAwesomeIcon icon={ faFemale }></FontAwesomeIcon> : 
                                    <FontAwesomeIcon icon={ faTransgender }></FontAwesomeIcon>
                        }
                        <p className="card-text text-uppercase px-2">{employee?.gender}</p>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <FontAwesomeIcon className="me-2" icon={ faEnvelope }></FontAwesomeIcon>
                    <span 
                        style={{
                            fontSize: "0.7rem"
                        }}>
                        {employee?.emailId}
                    </span>
                </div>
            </div>
        </div>
    );
};

EmployeeCard.propTypes = {
    employee: PropTypes.shape({
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        gender: PropTypes.string,
        emailId: PropTypes.string,
        qualification: PropTypes.shape({
            value: PropTypes.string
        }),
        department: PropTypes.shape({
            value: PropTypes.string
        })  
    })
};