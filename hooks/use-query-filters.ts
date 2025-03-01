import { useEffect } from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";



export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const params = {
            ...filters.prices,
            pizzaSizes: Array.from(filters.pizzaSizes),
            doughTypes: Array.from(filters.doughTypes),
            selectedIngredients: Array.from(filters.selectedIngredients),
        };

        const queryString = qs.stringify(params, { arrayFormat: 'comma' });

        router.push(`?${queryString}`, { scroll: false });
    }, [filters]);
}