import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="mb-6 flex gap-4 border-b pb-3">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "font-bold text-blue-600" : "text-slate-600"
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/tareas"
        className={({ isActive }) =>
          isActive ? "font-bold text-blue-600" : "text-slate-600"
        }
      >
        Tareas
      </NavLink>
    </nav>
  );
}