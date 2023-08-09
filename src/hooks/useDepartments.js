import {
    useCallback, useEffect, useState 
} from "react";

import { useAxios } from "./useAxios";

export const useDepartments = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const axios = useAxios();

    const fetchDepartments = useCallback(() => {
        setIsLoading(true);
        axios.get("departments").then((response) => {
            
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

    useEffect(() => {
        fetchDepartments();
    }, []);

    return {
        isLoading, 
        data, 
        error,
    };
};