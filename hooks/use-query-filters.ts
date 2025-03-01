import { useEffect } from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";


export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

    useEffect(() => {
        const params = {
            ...filters.prices,
            doughTypes: Array.from(filters.doughTypes),
            pizzaSizes: Array.from(filters.pizzaSizes),
            ingredients: Array.from(filters.selectedIngredients),
        };

        const query = qs.stringify(params, { arrayFormat: 'comma' });

        router.push(`?${query}`, { scroll: false });

    }, [filters.prices, filters.doughTypes, filters.pizzaSizes, filters.selectedIngredients, router]);

}