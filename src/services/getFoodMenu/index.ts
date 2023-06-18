import { FoodMenuInterface } from "@/components/foodMenu/types";

const getFoodMenu = async (): Promise<FoodMenuInterface[]> => {
  try {
    const response = await fetch(
      "https://order-app-services-production.up.railway.app/api/foodGroup",
      {
        next: { revalidate: 1000 },
      }
    );

    if (!response.ok) {
      throw response;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default getFoodMenu;
