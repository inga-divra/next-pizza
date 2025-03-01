import { Api } from "@/services/api-client"
import { useEffect, useState } from "react"
import { Ingredient } from "@prisma/client"

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                if (!ingredients) throw new Error("Ingredients is undefined or null");
                setIngredients(ingredients);
            } catch (error) {
                console.error("Error fetching ingredients:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients()
    }, [])

    return { ingredients, loading }
}