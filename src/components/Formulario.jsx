
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lista from './Lista'
import { useForm } from 'react-hook-form';


const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
console.log(data)
  }
    
    return (
        <section className='container '>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-1" >
        <Form.Label className='fw-bolder mb-0'>Tarea</Form.Label>
        <Form.Text className="d-flex mb-2 text-muted">
          {errors.tarea?.message}
        </Form.Text>
        <Form.Control type="text" {...register('tarea',{
        required: "Campo obligatorio",
        minLenght: {
          value:3,
          message: "La tarea debe tener minimo 2 carácteres"
        },
        maxLenght: {
          value:50,
          message: "La tarea debe tener máximo 50 carácteres"
        }
         })} placeholder="Agrega lo que quieres realizar" />
    </Form.Group>
        <div className='d-flex justify-content-center'>
      <Button variant="warning" className='text-center mb-5 border border-2 border-black' type="submit" >
        A lista
      </Button>
        </div>
    </Form>
    <Lista></Lista>
        </section>

    );
 };

export default Formulario;