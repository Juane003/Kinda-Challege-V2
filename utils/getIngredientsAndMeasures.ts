import { ingredientsProp, measureProp } from "@/constants";
import { CocktailDetail, KeyOfCocktailDetails } from "@/types";

export const getIngredientsAndMeasures = (cocktail: CocktailDetail) => {
  const ingredients = Object.keys(cocktail).filter((key) => {
    return (
      key.includes(ingredientsProp) && cocktail[key as KeyOfCocktailDetails]
    );
  });

  const measures = Object.keys(cocktail).filter((key) => {
    return key.includes(measureProp) && cocktail[key as KeyOfCocktailDetails];
  });

  return { ingredients, measures };
};
