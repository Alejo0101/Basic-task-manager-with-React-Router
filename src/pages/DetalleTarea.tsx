import { useParams, useNavigate } from "react-router";
import Boton from "../components/Boton";
import type { Tarea } from "../types/tarea";

interface Props {
  tareas: Tarea[];
  onAlternar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export default function DetalleTarea({ tareas, onAlternar, onEliminar }: Props) {
  // TODO 5: obtén el parámetro "id" de la URL.
  // Pista: const { id } = useParams<{ id: string }>();
  const { id } = useParams<{ id: string }>();

  // TODO 6: el id de la URL es texto. Conviértelo con Number(id)
  // y busca la tarea con tareas.find(...).
  const tarea: Tarea | undefined = tareas.find((t) => t.id === Number(id));

  // TODO 7: reemplaza esta función falsa por el hook real:
  // const navigate = useNavigate();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Detalle de la tarea {id}</h1>

      {tarea ? (
        <>
          <p>{tarea.titulo}</p>
          <div className="flex gap-2">
            <Boton onClick={() => onAlternar(tarea.id)}>
              {tarea.completada ? "Marcar pendiente" : "Marcar hecha"}
            </Boton>
            <Boton
              color="bg-red-500"
              onClick={() => {
                onEliminar(tarea.id);
                navigate("/tareas");
              }}
            >
              Eliminar
            </Boton>
          </div>
        </>
      ) : (
        <p>No existe una tarea con ese identificador.</p>
      )}

      <Boton color="bg-slate-600" onClick={() => navigate("/tareas")}>
        Volver al listado
      </Boton>
    </div>
  );
}