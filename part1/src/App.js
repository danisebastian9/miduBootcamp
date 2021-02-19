// import logo from './logo.svg';
import './App.css';
import Mensaje from "./Mensaje.js"


const Description = () => {
return <p>Esta es la app del curso FullStack Bootcamp</p>
}


const App = () => {
  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <Mensaje color="red" message= "Estamos trabajando"/>
        <Mensaje color="green" message= "En un curso"/>
        <Mensaje color="yellow" message= "de React"/>
        <Description />
      </div>
    </div>
  );
}

export default App;
