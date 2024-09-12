import Tarea from "./Tarea";
import ListGroup from 'react-bootstrap/ListGroup';

const Lista = ({arrayTareas}) => {
    return (
        <div>
    <ListGroup as="ul">
        {
            arrayTareas.map((elementotarea, indice)=><Tarea key={indice} tarea={elementotarea}></Tarea>)        }
        
    </ListGroup>
        </div>
    );
};

export default Lista;