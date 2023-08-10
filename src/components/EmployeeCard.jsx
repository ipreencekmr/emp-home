import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope, faFemale, faMale, faTransgender, faTrashCan, faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { resetModalAction, toggleModalAction } from "../action/modalAction";
import { useDeleteEmployee } from "../hooks/useDeleteEmployee";
import { Loader } from "./Loader";
import { ErrorBanner } from "./ErrorBanner";

export const EmployeeCard = ({ employee, refresh }) => {

    const modalButtonIndex = useSelector((state) => state.modal.buttonIndex);
    const tagIndex = useSelector((state) => state.modal.tagIndex);
    
    const dispatch = useDispatch();

    const {
        isLoading, 
        data, 
        error,
        deleteEmployee
    } = useDeleteEmployee();

    useEffect(()=>{
        if(employee?.id === tagIndex && modalButtonIndex === 1) {
            deleteEmployee(tagIndex);
            dispatch(resetModalAction());
        }
    }, [tagIndex, modalButtonIndex]);

    useEffect(()=>{
        if(data) refresh();
    }, [data]);

    if(isLoading || !employee) return <Loader></Loader>;

    if(error) return <ErrorBanner></ErrorBanner>;
    
    return (
        <div className="p-2">
            <div className="card" style={{
                minWidth: "20rem",
            }}>
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between flex-nowrap">
                        <a href={ `/update/${employee.id}` } 
                            className="btn btn-outline-secondary">Edit</a>
                        <span className="text-muted">{employee?.qualification?.value}</span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-2">
                            <FontAwesomeIcon 
                                className="fa-40 fa-grey" 
                                icon={ faUserCircle }></FontAwesomeIcon>
                        </div>
                        <div className="col-lg-10 col-md-10 col-10 ps-4">
                            <h5 
                                className="card-title">{employee.firstName} {employee.lastName}</h5>
                            <h6 
                                className="card-subtitle mb-2 text-muted">
                                {employee?.department?.value}
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        {
                            employee?.gender === "MALE" ? 
                                <FontAwesomeIcon 
                                    className="fa-grey" 
                                    icon={ faMale }></FontAwesomeIcon> : 
                                employee?.gender === "FEMALE" ? 
                                    <FontAwesomeIcon 
                                        className="fa-grey"  
                                        icon={ faFemale }></FontAwesomeIcon> : 
                                    <FontAwesomeIcon 
                                        className="fa-grey" 
                                        icon={ faTransgender }></FontAwesomeIcon>
                        }
                        <p className="card-text text-uppercase px-2">{employee?.gender}</p>
                    </div>
                </div>
                <div className="card-footer text-muted d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon 
                            className="me-2 fa-grey" 
                            icon={ faEnvelope }></FontAwesomeIcon>
                        <span 
                            style={{
                                fontSize: "0.7rem"
                            }}>
                            {employee?.emailId}
                        </span>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-link text-danger" 
                            data-testid="deleteEmpBtnId"
                            onClick={ () => dispatch(toggleModalAction(true, employee?.id)) }>
                            <FontAwesomeIcon icon={ faTrashCan }></FontAwesomeIcon>
                        </button>                        
                    </div>
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
    }),
    refresh: PropTypes.func
};