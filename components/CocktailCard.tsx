import {
  Cocktail,
  CocktailDetailResponse,
  KeyOfCocktailDetails,
} from "@/types";
import { getIngredientsAndMeasures } from "@/utils/getIngredientsAndMeasures";
import Image from "next/image";
import Link from "next/link";

interface CocktailCardProps {
  cocktail: Cocktail;
}
const getCurrentDrink = async (id: string) => {
  const data = await fetch(process.env.API_DRINK_BY_ID! + id);

  return (await data.json()) as CocktailDetailResponse;
};

export const CocktailCard = async ({ cocktail }: CocktailCardProps) => {
  const { drinks } = await getCurrentDrink(cocktail.idDrink);
  const { ingredients, measures } = getIngredientsAndMeasures(drinks[0]);

  return (
    <article className="border w-64 flex flex-col  items-center gap-4 p-4 rounded-md">
      <header>
        <h1>{cocktail.strDrink}</h1>
      </header>
      <main className="w-full flex flex-col items-center gap-4">
        <Image
          src={cocktail.strDrinkThumb}
          height={200}
          width={200}
          alt={`${cocktail.strDrink} image`}
          className="hover:scale-110 duration-300 overflow-hidden"
        />
        <div className="flex h-20 w-48 justify-center">
          <div className="flex">
            <p className="flex flex-col truncate">
              {ingredients.splice(0, 3).map((ingredientKey) => (
                <span
                  key={`${ingredientKey}${
                    drinks[0][ingredientKey as KeyOfCocktailDetails]
                  }`}
                  className="block truncate border-b border-b-gray-200 pr-4"
                >
                  {drinks[0][ingredientKey as KeyOfCocktailDetails]}
                </span>
              ))}
            </p>
            <p className="flex flex-col truncate">
              {measures.splice(0, 3).map((measureKey) => (
                <span
                  key={`${measureKey}${
                    drinks[0][measureKey as KeyOfCocktailDetails]
                  }`}
                  className="block truncate border-b pl-4 border-b-gray-200"
                >
                  {drinks[0][measureKey as KeyOfCocktailDetails]}
                </span>
              ))}
            </p>
          </div>
        </div>
      </main>
      <footer className="pb-2">
        <Link
          className="border border-green-500 text-green-500 w-full p-2 font-semibold rounded-md hover:text-gray-200 hover:bg-green-700 duration-300 active:bg-green-900"
          href={`details/${cocktail.idDrink}`}
        >
          View Details
        </Link>
      </footer>
    </article>
  );
};
