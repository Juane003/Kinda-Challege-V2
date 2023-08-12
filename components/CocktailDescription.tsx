import { CocktailDetail, KeyOfCocktailDetails } from "@/types";
import { getIngredientsAndMeasures } from "@/utils/getIngredientsAndMeasures";
import Image from "next/image";
import Link from "next/link";

interface CocktailDescriptionProps {
  cocktail: CocktailDetail;
}

export const CocktailDescription = ({ cocktail }: CocktailDescriptionProps) => {
  const { ingredients, measures } = getIngredientsAndMeasures(cocktail);
  return (
    <article className="flex  justify-center gap-4 pt-8">
      <header className="flex sm:flex-row items-center gap-4">
        <Image
          src={cocktail.strDrinkThumb}
          alt={`${cocktail.strDrink} + picture`}
          height={400}
          width={400}
          className="object-scale-down"
        />
      </header>
      <main className="pb-4 pt-4">
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
                  className="border-b  whitespace-nowrap overflow-hidden text-ellipsis border-b-gray-200 pr-8"
                >
                  {cocktail[measuresKey as KeyOfCocktailDetails]}
                </span>
              ))}
            </p>
          </div>
          <p className="w-48">{cocktail.strInstructions}</p>
          <Link
            href={"/"}
            className="border text-center border-green-500 text-green-500 w-full p-2 font-semibold rounded-md hover:text-gray-200 hover:bg-green-700 duration-300 active:bg-green-900"
          >
            Go Back
          </Link>
        </div>
      </main>
    </article>
  );
};
