import React from "react";
import { EmployeeCard } from "./EmployeeCard";
import { useEmployees } from "../hooks/useEmployees";
import { Loader } from "./Loader";
import { ErrorBanner } from "./ErrorBanner";

export const EmployeeList = () => {

    const {
        isLoading, 
        data, 
        error
    } = useEmployees();

    if(isLoading) return <Loader></Loader>

    if(error) return <ErrorBanner></ErrorBanner>

    return (
        <div className="d-flex flex-row justify-content-between flex-wrap p-2">
            {
                data?.map((item) => (
                    <EmployeeCard key={ item?.id } employee={ item }/>
                ))
            }
        </div>
    );
};