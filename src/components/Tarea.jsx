import { Button,ListGroup } from "react-bootstrap";
const Tarea = ({tarea, borrarTarea}) => {
    return (

            <ListGroup.Item as="li" className="my-2 d-flex justify-content-between">
                <div className="d-flex">
                <p className="my-auto"> {tarea} </p> 
                </div>
            <Button variant="danger" className="" onClick={()=>borrarTarea(tarea)}>Borrar</Button>
            </ListGroup.Item>
    );
};

export default Tarea;