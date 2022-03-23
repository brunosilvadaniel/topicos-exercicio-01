import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Form from './Form.jsx'
import Lista from './Lista.jsx'

function App() {

  function fcAdicionar(item){
    setItens([item, ...itens])
  }

  const [itens, setItens] = useState([]);

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <Lista itens={itens} />
      <Form fcAdicionar={fcAdicionar}/>
    </div>
  );
}

export default App;
