import React from "react";
import { FoodMenuProps } from "./types";
import FoodItem from "./FoodItem";

const FoodList = (props: FoodMenuProps) => {
  const { foodList } = props;
  return (
    <div className="tm-list">
      {foodList.map((foodItem, key) => {
        return <FoodItem {...foodItem} key={key} />;
      })}
    </div>
  );
};

export default FoodList;
