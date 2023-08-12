import { CocktailCard } from "@/components/CocktailCard";
import { Cocktail, CocktailsResponse } from "@/types";

const getCocktailList = async () => {
  const data = await fetch(process.env.API_LIST!);

  return (await data.json()) as CocktailsResponse;
};

export default async function Home() {
  const cocktailList = await getCocktailList();

  const renderCocktails = (cocktail: Cocktail) => {
    return <CocktailCard cocktail={cocktail} />;
  };
  return (
    <>
      <main className="flex flex-wrap justify-center py-8 gap-8 ">
        {cocktailList.drinks.map(renderCocktails)}
      </main>
    </>
  );
}
