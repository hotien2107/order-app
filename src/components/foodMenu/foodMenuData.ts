import { FoodItemProps } from "./FoodItem/types";

export interface FoodMenuInterface {
  id: React.Key;
  group: string;
  foodList: FoodItemProps[];
}

export const foodMenuData: FoodMenuInterface[] = [
  {
    id: "Iced Coffee",
    group: "Iced Coffee",
    foodList: [
      {
        img: {
          src: "/iced-americano.png",
        },
        name: "Iced Americano",
        price: 10.25,
        desc: "Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.",
      },
    ],
  },
  {
    id: "Hot Coffee",
    group: "Hot Coffee",
    foodList: [
      {
        img: {
          src: "/hot-americano.png",
        },
        name: "Hot Americano",
        price: 8.5,
        desc: "Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.",
      },
      {
        img: {
          src: "/hot-cappuccino.png",
        },
        name: "Hot Cappuccino",
        price: 9.5,
        desc: "Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.",
      },
    ],
  },
  {
    id: "Fruit Juice",
    group: "Fruit Juice",
    foodList: [
      {
        img: {
          src: "/smoothie-1.png",
        },
        name: "Strawberry Smoothie",
        price: 12.5,
        desc: "Here is a short description for the first item. Wave Cafe Template is provided by Tooplate.",
      },
    ],
  },
];
