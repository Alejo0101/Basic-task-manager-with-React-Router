import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Tareas from "./pages/Tareas";
import DetalleTarea from "./pages/DetalleTarea";
import NoEncontrado from "./pages/NoEncontrado";
import type { Tarea } from "./types/tarea";

export default function App() {
  // El estado vive en App para que lo compartan todas las páginas.
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, titulo: "Instalar React Router", completada: true },
    { id: 2, titulo: "Crear las rutas", completada: false },
    { id: 3, titulo: "Probar useParams", completada: false },
  ]);

  // Ejemplo resuelto: agregar una tarea.
  const agregar = (titulo: string) => {
    const id = Math.max(0, ...tareas.map((t) => t.id)) + 1;
    setTareas([...tareas, { id, titulo, completada: false }]);
  };

  // TODO 8a: cambia la propiedad "completada" de la tarea con ese id.
  // Pista: setTareas(tareas.map((t) => t.id === id ? { ...t, completada: !t.completada } : t))
  const alternar = (id: number) => {
    setTareas(tareas.map((t) => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  // TODO 8b: elimina la tarea con ese id.
  // Pista: usa filter para conservar las tareas con id diferente.
  const eliminar = (id: number) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/tareas"
          element={
            <Tareas
              tareas={tareas}
              onAgregar={agregar}
              onAlternar={alternar}
              onEliminar={eliminar}
            />
          }
        />

        <Route
          path="/tareas/:id"
          element={
            <DetalleTarea
              tareas={tareas}
              onAlternar={alternar}
              onEliminar={eliminar}
            />
          }
        />

        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </div>
  );
}