import ReactDOM from "react-dom";
import React, { useState } from "react"
import Filtro from "./Components/Filtro";
import Formulario from "./Components/Formulario";
import Persona from "./Components/Persona";
const App = () => {
    
    const [ nuevonom, setNuevoNombre ] = useState('')
    const [nuevonum, setNuevoNumero] = useState("");
    const [persona, setPersona] = useState([
      { nombre: "Arto Hellas", numero: "040-1234567" },
    ]);
    const [filtro, setFiltro] = useState("");

    const Guardar=(event)=>{
        event.preventDefault()

        const nuevaPersona={
          nombre:nuevonom,
          numero:nuevonum,

        };

        let respetidos = persona.filter((person) => {
          return person.nombre === nuevonom;
        });
    
        console.log(respetidos);
    
        if (respetidos.length > 0) {
          alert(`${nuevaPersona.nombre} ya existe `);
          return;
        }

        setPersona([
            ...persona,nuevaPersona,
        ])

        setNuevoNombre('')

    };

    const Agregar=(event)=>{
      setNuevoNombre(event.target.value)
    };

    const Agregarnum = (event) => {
      setNuevoNumero(event.target.value);
    };

    let filtroPersona = persona;

      if (filtro.length > 0) {
        filtroPersona = persona.filter((person) => {
          return person.nombre.toUpperCase().includes(filtro);
        });
      }

      const Buscar = (event) => {
        setFiltro(event.target.value.toUpperCase());
      };

    return (
      <div>
        <h2>Phonebook</h2>
        <Filtro filtro={filtro} Buscar={Buscar} />
          <h2>Numbers</h2>
          <h2>add a new</h2>
          <Formulario
            nombre={nuevonom}
            numero={nuevonum}
            Agregar={Agregar}
            Agregarnum={Agregarnum}
            Guardar={Guardar}
          />
        <h2>Numbers</h2>
        <Persona data={filtroPersona} />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));