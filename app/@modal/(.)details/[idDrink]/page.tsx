import { CocktailDialog } from "@/components/CocktailDialog";
import { CocktailDetailResponse, CocktailsResponse } from "@/types";

export async function generateStaticParams() {
  const data = await fetch(process.env.API_LIST!);
  const cocktails = (await data.json()) as CocktailsResponse;
  return cocktails.drinks.map((cocktail) => {
    return { idDrink: cocktail.idDrink };
  });
}

const getCurrentDrink = async (id: string) => {
  const data = await fetch(process.env.API_DRINK_BY_ID! + id);

  return (await data.json()) as CocktailDetailResponse;
};

const CocktailDetailsModalPage = async ({
  params: { idDrink },
}: {
  params: { idDrink: string };
}) => {
  const { drinks } = await getCurrentDrink(idDrink);
  return <CocktailDialog cocktail={drinks[0]} />;
};

export default CocktailDetailsModalPage;
