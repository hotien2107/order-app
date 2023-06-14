"use client";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import { FoodMenuInterface, FoodMenuProps } from "./types";

const FoodList = (props: FoodMenuProps) => {
  const { foodMenuData } = props;
  const [currTab, setCurrTab] = useState<FoodMenuInterface>();

  useEffect(() => {
    if (foodMenuData.length === 0) return;
    setCurrTab(foodMenuData[0]);
  }, [foodMenuData]);

  if (!currTab) return <div>No data</div>;

  return (
    <div id="drink" className="tm-page-content">
      <nav className="tm-black-bg tm-drinks-nav">
        <ul>
          {foodMenuData.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  setCurrTab(item);
                }}
              >
                <a
                  className={
                    "tm-tab-link cursor-pointer" +
                    (item.group === currTab.group ? " active" : "")
                  }
                >
                  {item.group}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div id="cold" className="tm-tab-content">
        <div className="tm-list">
          <div className="tm-list">
            {currTab.foodList.map((foodItem, key) => {
              return <FoodItem {...foodItem} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
