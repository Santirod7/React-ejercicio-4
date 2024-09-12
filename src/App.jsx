
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'

function App() {

  return (
   <main className=''>
    <div className='d-flex justify-content-center mt-4'>
    <img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzC6pi-QUjeZ_z4ukUXrtLc06zuUH1V400A&s' alt="Logo" />
    </div>
    <h1 className='text-center mt-3'><b>Cat list</b></h1>
    <h3 className='text-center mt-2'>Experto en administrar tareas</h3>
    <Formulario></Formulario>
   </main>
  )
}

export default App
