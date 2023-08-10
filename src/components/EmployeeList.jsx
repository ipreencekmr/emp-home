import React, { useEffect, useState } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { useEmployees } from "../hooks/useEmployees";
import { Loader } from "./Loader";
import { ErrorBanner } from "./ErrorBanner";
import { useSelector } from "react-redux";

export const EmployeeList = () => {

    const {
        isLoading, 
        data, 
        error,
        fetchEmployees
    } = useEmployees();

    const departmentId = useSelector((state) => state.app.departmentId);
    const qualificationId = useSelector((state) => state.app.qualificationId);
    const searchText = useSelector((state) => state.app.searchText);
    const [filteredList, setFilteredList] = useState(data);

    useEffect(()=>{

        const filter = data?.filter((item) => {
            let matchCondition = true;

            if(departmentId > -1)
                matchCondition = item.department.id === departmentId;

            if(qualificationId > -1)
                matchCondition = matchCondition && item.qualification.id === qualificationId;

            if(searchText?.length > 0) {
                const fullString = `${item.firstName } ${ item?.lastName}`.toLowerCase();
                matchCondition = matchCondition && fullString.includes(searchText?.toLowerCase());
            }

            return matchCondition;
        });

        setFilteredList(filter);

    }, [data, departmentId, qualificationId, searchText]);

    if(isLoading) return <Loader></Loader>

    if(error) return <ErrorBanner></ErrorBanner>

    return (
        <div className="d-flex flex-row flex-wrap p-2">
            {
                filteredList?.map((item) => (
                    <EmployeeCard key={ item?.id } employee={ item } refresh={ fetchEmployees }/>
                ))
            }
        </div>
    );
};