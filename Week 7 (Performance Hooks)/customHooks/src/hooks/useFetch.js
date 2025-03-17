// Hook can make use of existing hooks

import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, fetchConfig) {
    // Loading State
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, fetchConfig);
                if (!response.ok) {
                    throw new Error("Failed to Fetch from the API");
                }    
                const result = await response.json();

                setTimeout(() => {
                    setData(result);
                    setIsLoading(false);
                }, 3000)

            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchData();

    }, [url, fetchConfig])

    return {
        data,
        isLoading,
        error
    }

}

export default useFetch;