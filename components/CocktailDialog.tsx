import { CocktailDetail, KeyOfCocktailDetails } from "@/types";
import Image from "next/image";
import { RoutingModal } from "./RoutingModal";
import { getIngredientsAndMeasures } from "@/utils/getIngredientsAndMeasures";

interface CocktailDialogProps {
  cocktail: CocktailDetail;
}

export const CocktailDialog = ({ cocktail }: CocktailDialogProps) => {
  const { ingredients, measures } = getIngredientsAndMeasures(cocktail);
  return (
    <RoutingModal>
      <article className="flex flex-col items-center gap-4 ">
        <header className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src={cocktail.strDrinkThumb}
            alt={`${cocktail.strDrink} + picture`}
            height={100}
            width={100}
            className="object-scale-down"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:w-32 w-full">{cocktail.strDrink}</h1>
            <div className="flex">
              <p className="flex flex-col">
                {ingredients.map((ingredientKey) => (
                  <span
                    key={`${ingredientKey}${
                      cocktail[ingredientKey as KeyOfCocktailDetails]
                    }`}
                    className="border-b  whitespace-nowrap overflow-hidden text-ellipsis border-b-gray-200 pr-8"
                  >
                    {cocktail[ingredientKey as KeyOfCocktailDetails]}
                  </span>
                ))}
              </p>
              <p className="flex flex-col">
                {measures.map((measuresKey) => (
                  <span
                    key={`${measuresKey}${
                      cocktail[measuresKey as KeyOfCocktailDetails]
                    }`}
                    className="border-b max-w-20 whitespace-nowrap overflow-hidden text-ellipsis border-b-gray-200 pr-8"
                  >
                    {cocktail[measuresKey as KeyOfCocktailDetails]}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </header>
        <main>
          <p>{cocktail.strInstructions}</p>
        </main>
      </article>
    </RoutingModal>
  );
};
