import Tarea from "./Tarea";
import ListGroup from 'react-bootstrap/ListGroup';

const Lista = ({arrayTareas, borrarTarea}) => {
    return (
        <div>
    <ListGroup as="ul">
        {
            arrayTareas.map((elementotarea, indice)=><Tarea key={indice} tarea={elementotarea} borrarTarea={borrarTarea}></Tarea>)        }
        
    </ListGroup>
        </div>
    );
};

export default Lista;