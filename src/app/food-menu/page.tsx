import FoodList from "@/components/foodMenu";
import getFoodMenu from "@/services/getFoodMenu";

const FoodMenu = async () => {
  const response = await getFoodMenu();
  console.log(response);
  return <FoodList foodMenuData={response ?? []} />;
};

export default FoodMenu;
