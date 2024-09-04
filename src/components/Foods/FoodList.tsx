import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "../ui/Card";
import { Food } from "@/types/Food";
import { Button } from "../ui/button";
interface FoodListProps {
  data?: Food[];
}

function FoodList({ data }: FoodListProps) {
  return (
    <Card>
      <Accordion type="single" collapsible className="w-full">
        {!data
          ? ""
          : data.map((item) => (
              <AccordionItem
                value={item.id.toString()}
                className="hover:no-underline d"
              >
                <AccordionTrigger className="px-3 rounded-lg">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent>
                  <span className="inline-block w-16 text-right mr-3">
                    Protein:{" "}
                  </span>
                  {item.protein + "g"}
                </AccordionContent>
                <AccordionContent>
                  <span className="inline-block w-16 text-right mr-3">
                    Carbs:
                  </span>{" "}
                  {item.carbs}
                </AccordionContent>
                <AccordionContent>
                  <span className="inline-block w-16 text-right mr-3">
                    Fats:
                  </span>{" "}
                  {item.fats}
                </AccordionContent>
                <AccordionContent className="flex gap-2">
                  <Button variant={"default"}>Edit</Button>
                  <Button variant={"destructive"}>Delete</Button>
                </AccordionContent>
              </AccordionItem>
            ))}
      </Accordion>
    </Card>
  );
}
export default FoodList;
