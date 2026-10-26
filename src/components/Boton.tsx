import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  color?: string; // clase de Tailwind, por ejemplo "bg-red-500"
}

export default function Boton({ children, onClick, color = "bg-blue-600" }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded px-3 py-1 font-bold text-white ${color}`}
    >
      {children}
    </button>
  );
}
