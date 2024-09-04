import { Food } from "@/types/Food";
import Card from "../ui/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Skeleton } from "../ui/skeleton";

interface FoodTableProps {
  data?: Food[];
}

function FoodTable({ data }: FoodTableProps) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40%]">Name</TableHead>
            <TableHead className="w-[20%]">Protein</TableHead>
            <TableHead className="w-[20%]">Carbs</TableHead>
            <TableHead className="w-[20%]">Fats</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {!data
            ? [...Array(5)].map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-full h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-4" />
                  </TableCell>
                </TableRow>
              ))
            : data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.protein}</TableCell>
                  <TableCell>{item.carbs}</TableCell>
                  <TableCell>{item.fats}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </Card>
  );
}
export default FoodTable;
