/* eslint-disable import/no-unresolved */
import React, { Suspense } from "react";
import Employee from "emp_employee/Employee";
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";

import { PageControls } from "./PageControls";
import { EmployeeList } from "./EmployeeList";

export const Dashboard = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>

                <Route path='/' element={
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
                        <Employee />
                    </Suspense> 
                }/>

                <Route path='/mock' element={ 
                    <Suspense 
                        fallback={ "Loading" }> 
                        <div>Mock Testing</div>
                    </Suspense> 
                }/>

            </Routes>
        </BrowserRouter>
    );
};