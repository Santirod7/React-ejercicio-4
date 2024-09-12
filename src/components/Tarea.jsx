import { Button,ListGroup } from "react-bootstrap";
const Tarea = () => {
    return (

            <ListGroup.Item as="li" className="my-2 d-flex justify-content-between">
                <div className="d-flex">
                <p className="my-auto">la tarea</p> 
                </div>
            <Button variant="danger" className="">Borrar</Button>
            </ListGroup.Item>
    );
};

export default Tarea;