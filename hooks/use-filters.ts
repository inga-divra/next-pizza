import { useRouter, useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";


interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaSizes: string;
    doughTypes: string;
    ingredients: string;
}

export const useFilters = () => {

    const router = useRouter();
    const searchParams = useSearchParams() as unknown as Map<
        keyof QueryFilters,
        string
    >;

    /* Ingredients filter */
    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get('ingredients')?.split(','))
    );


    /* Pizza sizes filter */
    const [pizzaSizes, { toggle: togglePizzaSizes }] = useSet(
        new Set<string>(
            searchParams.get('pizzaSizes')
                ? searchParams.get('pizzaSizes')?.split(',')
                : []
        )
    );

    /* Dough types filter */
    const [doughTypes, { toggle: toggleDoughTypes }] = useSet(
        new Set<string>(
            searchParams.get('doughTypes')
                ? searchParams.get('doughTypes')?.split(',')
                : []
        )
    );

    /* Price filter */
    const [prices, setPrices] = useState<PriceProps>({
        priceFrom: searchParams.get('priceFrom')
            ? Number(searchParams.get('priceFrom'))
            : undefined,
        priceTo: searchParams.get('priceTo')
            ? Number(searchParams.get('priceTo'))
            : undefined,
    });

    return {
        selectedIngredients,
        pizzaSizes,
        doughTypes,
        prices,
        setPrices,
        setPizzaSizes: togglePizzaSizes,
        setDoughTypes: toggleDoughTypes,
        setIngredients: toggleIngredients
    }
}