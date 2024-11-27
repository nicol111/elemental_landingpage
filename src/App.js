import React from 'react';
import Header from './componentes/header';
import Banner from './componentes/banner';  
import Servicios from "./componentes/servicios";
import ProximosCursos from "./componentes/ProximosCursos";
import ClientesCorporativos from "./componentes/clientesCorporativos";
import Testimonios from './componentes/testimonios';
import Elemental from './componentes/Elemental';
import Footer from './componentes/footer';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />  
      <Servicios />
      <ProximosCursos />
      <ClientesCorporativos />
      <Testimonios />
      <Elemental />
      <Footer />
      <main>
        
      </main>
    </div>
  );
}

export default App;
