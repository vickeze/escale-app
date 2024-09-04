import { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-300 drop-shadow-md m-5 rounded-lg px-5 py-3">
      {children}
    </div>
  );
}
export default Card;
