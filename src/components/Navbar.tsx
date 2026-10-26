// TODO 3: importa NavLink desde "react-router"

export default function Navbar() {
  return (
    <nav className="mb-6 flex gap-4 border-b pb-3">
      {/* TODO 3: cambia cada <a> por <NavLink to="...">.
          Usa className={({ isActive }) => isActive ? "font-bold text-blue-600" : "text-slate-600"}
          y agrega la propiedad "end" al enlace de "/" */}
      <a href="/">Inicio</a>
      <a href="/tareas">Tareas</a>
    </nav>
  );
}
