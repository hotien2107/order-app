import FoodList from "@/components/foodMenu";
import getFoodMenu from "@/services/getFoodMenu";
import { GetStaticProps, NextPage } from "next";
import { FoodMenuPageInterface } from "./types";

export const getStaticProps: GetStaticProps<
  FoodMenuPageInterface
> = async () => {
  const response = await getFoodMenu();
  return {
    props: {
      foodMenuData: response,
    },
  };
};

const FoodMenu: NextPage<FoodMenuPageInterface> = (
  props: FoodMenuPageInterface
) => {
  const { foodMenuData } = props;
  return <FoodList foodMenuData={foodMenuData ?? []} />;
};

export default FoodMenu;
