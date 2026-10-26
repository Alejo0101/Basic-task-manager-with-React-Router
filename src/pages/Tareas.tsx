import { useState } from "react";
import { Link } from "react-router";
import Boton from "../components/Boton";
import type { Tarea } from "../types/tarea";

interface Props {
  tareas: Tarea[];
  onAgregar: (titulo: string) => void;
  onAlternar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export default function Tareas({ tareas, onAgregar, onAlternar, onEliminar }: Props) {
  const [titulo, setTitulo] = useState("");

  const agregar = () => {
    if (titulo.trim() === "") return;
    onAgregar(titulo.trim());
    setTitulo("");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Tareas</h1>

      <div className="flex gap-2">
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nueva tarea"
          className="flex-1 rounded border p-1"
        />
        <Boton onClick={agregar}>Agregar</Boton>
      </div>

      <ul className="space-y-2">
        {tareas.map((t) => (
          <li key={t.id} className="flex items-center justify-between rounded border p-2">
            {/* TODO 4: cambia este <a> por <Link to={`/tareas/${t.id}`}>
                Observa en Network qué diferencia hay al pulsarlo antes y después. */}
            <Link
              to={`/tareas/${t.id}`}
              className={t.completada ? "text-slate-400 line-through" : ""}
            >
              {t.titulo}
            </Link>
            <div className="flex gap-2">
              <Boton
                color={t.completada ? "bg-green-600" : "bg-orange-500"}
                onClick={() => onAlternar(t.id)}
              >
                {t.completada ? "Hecha" : "Pendiente"}
              </Boton>
              <Boton color="bg-red-500" onClick={() => onEliminar(t.id)}>
                Eliminar
              </Boton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}