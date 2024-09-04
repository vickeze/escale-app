import { useFoodsData } from "@/apiHooks/foods/foods";
import FoodList from "@/components/Foods/FoodList";
import FoodTable from "@/components/Foods/FoodTable";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Foods() {
  const { data } = useFoodsData();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div>
      {isMobile ? (
        <FoodList data={data?.data} />
      ) : (
        <FoodTable data={data?.data} />
      )}
    </div>
  );
}
export default Foods;
