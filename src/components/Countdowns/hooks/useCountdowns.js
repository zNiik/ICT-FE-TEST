import React, { useEffect, useState } from 'react';
import { fetchCategories, fetchCountdowns } from '../../../helpers';

const useCountdowns = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [countdowns, setCountdowns] = useState([]);

    useEffect(() => {
        async function fetchAPIs() {
            setLoading(true);

            const categories = await fetchCategories();
            const countdowns = await fetchCountdowns();
            
            setCategories([
                { id: 0, name: 'All Categories'},
                ...categories
            ]);
            
            setCountdowns(countdowns);

            setLoading(false);
        }

        fetchAPIs();
    }, []);

    return {
        loading,
        categories,
        countdowns
    };
}

export default useCountdowns;