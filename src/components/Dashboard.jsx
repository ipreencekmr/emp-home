import React, { Suspense } from "react";
// eslint-disable-next-line import/no-unresolved
const Employee = React.lazy(() => import("emp_employee/Employee"));
// eslint-disable-next-line import/no-unresolved
const Address = React.lazy(() => import("emp_address/Address"));

import { PageControls } from "./PageControls";

import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import { EmployeeList } from "./EmployeeList";

export const Dashboard = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/*'  forceRefresh={ true } element={
                    <Suspense 
                        fallback={ "Loading" }>
                        <PageControls />
                        <EmployeeList />
                    </Suspense> 
                } />

                <Route path='/add' element={ 
                    <Suspense 
                        fallback={ "Loading" }> 
                        <Employee />
                    </Suspense> 
                }/>
                
                <Route path='/update/:id' element={ 
                    <Suspense 
                        fallback={ "Loading" }> 
                        <Address />
                    </Suspense> 
                }/>

            </Routes>
        </BrowserRouter>
    );
};