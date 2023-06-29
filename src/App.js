import './App.css';
import {Footer, Header, Lastwork, AboutUs, Navegacion, } from "./components"
import Whastsapp from './components/Whastsapp/Whastsapp';

function App() {
  return (
    <div className='contenedor'>
        <Header/>
        <Navegacion/>
        <AboutUs/>
        <Lastwork/>
        <Footer/>
        <Whastsapp/>
      <div className='espacio'></div>
    </div>
  );
}

export default App;
