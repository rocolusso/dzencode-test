import {useEffect, useState} from 'react';

const useLoading = () => {
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },250)
    },[setIsLoading])
    return {
        isLoading,setIsLoading
    };
};

export default useLoading;
