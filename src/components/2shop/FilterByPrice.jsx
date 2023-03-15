import PriceAllItems from "./PriceAllItems";
import { useSelector } from "react-redux";
import PriceItems from "./PriceItems";

const FilterByPrice = () => {
  const prices = useSelector((state) => state.dataReduser.prices);

  return (
    <form>
      <PriceAllItems
        item={prices}
        key={prices.id}
      />
      {prices.map((item) => {
        return (
          <PriceItems
            item={item}
            key={item.id}
          />
        );
      })}
    </form>
  );
};
export default FilterByPrice;
