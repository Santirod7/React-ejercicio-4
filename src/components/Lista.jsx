import Tarea from "./Tarea";
import ListGroup from 'react-bootstrap/ListGroup';

const Lista = () => {
    return (
        <div>
    <ListGroup as="ul">
        <Tarea></Tarea>
    </ListGroup>
        </div>
    );
};

export default Lista;