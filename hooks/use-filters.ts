import { useSearchParams } from "next/navigation";
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

export interface Filters {
    pizzaSizes: Set<string>;
    doughTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: PriceProps;
}

interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setPizzaSizes: (id: string) => void;
    setDoughTypes: (id: string) => void;
    setSelectedIngredients: (id: string) => void;
}

export const useFilters = (): ReturnProps => {

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

    const updatePrice = (name: keyof PriceProps, value: number) =>
        setPrices({
            ...prices,
            [name]: value,
        });


    return {
        selectedIngredients,
        pizzaSizes,
        doughTypes,
        prices,
        setPrices: updatePrice,
        setPizzaSizes: togglePizzaSizes,
        setDoughTypes: toggleDoughTypes,
        setSelectedIngredients: toggleIngredients
    }
}