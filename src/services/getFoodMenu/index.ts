import { FoodMenuInterface } from "@/components/foodMenu/types";
import axios from "axios";

const getFoodMenu = async (): Promise<FoodMenuInterface[]> => {
  try {
    const response = await axios.get(
      "https://order-app-services-production.up.railway.app/food-menu"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getFoodMenu;
