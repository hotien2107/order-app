import React from "react";
import { FoodItemProps } from "./types";
import Image from "next/image";

const FoodItem = (props: FoodItemProps) => {
  const { img, name, price, desc } = props;

  return (
    <div className="tm-list-item">
      <Image
        src={img.src}
        alt={img.alt ?? "image"}
        className="tm-list-item-img"
        width={100}
        height={100}
      />
      <div className="tm-black-bg tm-list-item-text">
        <h3 className="tm-list-item-name">
          {name}
          <span className="tm-list-item-price">${price}</span>
        </h3>
        <p className="tm-list-item-description">{desc}</p>
      </div>
    </div>
  );
};

export default FoodItem;
