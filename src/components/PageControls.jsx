import React from "react";

export const PageControls = () => {
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
                            placeholder="Employee Name" />
                    </div>
                </div>
                <div className="p-2">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="homeFilterById">Filter By:</span>
                        </div>
                        <select id="homeDepartmentId" 
                            className="form-control" 
                            aria-labelledby="homeFilterById">
                            <option selected>Choose Department...</option>
                            <option>...</option>
                        </select>
                        <select id="homeQualificationId" 
                            className="form-control" 
                            aria-labelledby="homeFilterById">
                            <option selected>Choose Qualification...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-end">
                <div className="p-2">
                    <a href="/add" className="btn btn-outline-success">Add an Employee</a>
                </div>
            </div>
        </div>
    );
};