import { useCallback, useState } from "react";
import { useAxios } from "./useAxios";

export const useDeleteEmployee = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const axios = useAxios();

    const deleteEmployee = useCallback((empId) => {

        if(!empId) return;

        setIsLoading(true);

        axios.delete(`employees/${empId}`).then((response) => {
            if(response.status === 200) {
                setError(null);
                setData(response.data);
            }else {
                setError(new Error("Something went wrong!"));
                setData(null);
            }
        }).catch(err => {
            setData(null);
            setError(err);
        }).finally(()=>{
            setIsLoading(false);
        });
    }, [axios]);

    return {
        isLoading, 
        data, 
        error,
        deleteEmployee,
    };
};