import { useNavigate } from "react-router";
export default function VolverTareas() {
const navigate = useNavigate();
return (
<button onClick={() => navigate("/tareas")}>
Volver al listado
</button>
);
}