import { useParams } from "react-router";
export default function DetalleTarea() {
const { id } = useParams<{ id: string }>();
return <h1>Detalle de la tarea {id}</h1>;
}