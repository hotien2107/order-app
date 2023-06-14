import { FoodItemProps } from "./FoodItem/types";

export interface FoodMenuProps {
  foodMenuData: FoodMenuInterface[];
}

export interface FoodMenuInterface {
  id: React.Key;
  group: string;
  foodList: FoodItemProps[];
}
