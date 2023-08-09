import React from "react";
import { useDepartments } from "../hooks/useDepartments";
import { useQualifications } from "../hooks/useQualifications";
import { useDispatch, useSelector } from "react-redux";
import {
    departmentFilterAction, qualificationFilterAction, resetFilterAction, searchTextFilterAction 
} from "../action/action";

export const PageControls = () => {

    const dispatch = useDispatch();
    const departmentId = useSelector((state) => state.departmentId);
    const qualificationId = useSelector((state) => state.qualificationId);
    const searchText = useSelector((state) => state.searchText);

    const { data: departmentList } = useDepartments();
    const { data: qualificationList } = useQualifications();

    const clearFilters = () => {
        dispatch(resetFilterAction());
    };

    const changeValue = (e) => {
        const value = e.target.value;
        switch(e.target.id) {
            case "homeDepartmentId":{
                const payload = Number(value);
                dispatch(departmentFilterAction(payload));
            }
                break;
            case "homeQualificationId":{
                const payload = Number(value);
                dispatch(qualificationFilterAction(payload));
            }
                break;
            case "homeSearchNameId":{
                dispatch(searchTextFilterAction(value));
            }
        }
    };

    return (
        <div className="d-flex flex-row justify-content-between p-2">
            <div className="d-flex flex-row justify-content-start">
                <div className="p-2">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="homeSearchById">Search By:</span>
                        </div>
                        <input type="text" 
                            className="form-control" 
                            aria-labelledby="homeSearchById"
                            id="homeSearchNameId" 
                            value={ searchText }
                            onChange={ changeValue }
                            placeholder="Employee Name" />
                    </div>
                </div>
                <div className="p-2">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="homeFilterById">Filter By:</span>
                        </div>
                        <select 
                            id="homeDepartmentId" 
                            data-testid="selectId"
                            className="form-control" 
                            aria-labelledby="homeFilterById"
                            value={ departmentId } 
                            onChange={ changeValue }
                        >
                            <option value={ -1 }>All Departments</option>
                            {
                                departmentList?.map((x)=><option 
                                    key={ x.id } 
                                    value={ x.id }>
                                    {x.value}
                                </option>)
                            }
                        </select>
                        <select 
                            id="homeQualificationId" 
                            data-testid="selectId"
                            className="form-control" 
                            aria-labelledby="homeFilterById"
                            value={ qualificationId }
                            onChange={ changeValue }
                        >
                            <option value={ -1 }>All Qualifications</option>
                            {
                                qualificationList?.map((x)=><option 
                                    key={ x.id } 
                                    value={ x.id }>
                                    {x.value}
                                </option>)
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-end">
                <div className="p-2">
                    <button 
                        className="btn btn-outline-success" 
                        onClick={ clearFilters }>Clear Filters</button>
                </div>
                <div className="p-2">
                    <a 
                        href="/add" 
                        className="btn btn-outline-success">Add an Employee</a>
                </div>
            </div>
        </div>
    );
};