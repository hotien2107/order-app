"use client";
import FoodList from "@/components/foodMenu";
import {
  FoodMenuInterface,
  foodMenuData,
} from "@/components/foodMenu/foodMenuData";

import React, { useState } from "react";

const FoodMenu = () => {
  const [currTab, setCurrTab] = useState<FoodMenuInterface>(foodMenuData[0]);

  return (
    <div id="drink" className="tm-page-content">
      {/* Drink Menu Page */}
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
          <FoodList foodList={currTab.foodList} />
        </div>
      </div>
      {/* end Drink Menu Page */}
    </div>
  );
};

export default FoodMenu;
