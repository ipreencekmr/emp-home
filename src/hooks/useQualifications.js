import {
    useCallback, useEffect, useState 
} from "react";

import { useAxios } from "./useAxios";

export const useQualifications = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const axios = useAxios();

    const fetchQualifications = useCallback(() => {
        setIsLoading(true);
        axios.get("qualifications").then((response) => {
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
        fetchQualifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isLoading, 
        data, 
        error,
    };
};