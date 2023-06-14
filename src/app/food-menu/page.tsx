import FoodList from "@/components/foodMenu";
import getFoodMenu from "@/services/getFoodMenu";

const FoodMenu = async () => {
  const response = await getFoodMenu();
  return <FoodList foodMenuData={response ?? []} />;
};

export default FoodMenu;
