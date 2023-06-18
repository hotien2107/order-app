import { FoodItemProps } from "./FoodItem/types";

export interface FoodMenuProps {
  foodMenuData: FoodMenuInterface[];
}

export interface FoodMenuInterface {
  ID: React.Key;
  name: string;
  foodList: FoodItemProps[];
}
