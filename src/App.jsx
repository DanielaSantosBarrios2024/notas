import {useState} from "react";

function App() {


  const [inputState, setInputState] = useState({

    titulo:"",
    fecha:"",
    nota:"",

  });/*representa el valor inicial de state*/
 
 
  const handleInputChange =(event) =>{

    setInputState ({
      ...inputState,
    [event.target.name]: event.target.value, 

    });
/*setInputState({
titulo :event.target.value,
fecha:   ,
nota:   ,

});*/

  };

  

  return (
    <div className="App">
  
     
        <h3>NOTAS UWU</h3>

      

        <label  htmlFor="titulo">input de titulo</label>
        <input id ="titulo" name="titulo" type="text" 
        onChange={handleInputChange} 
        value={inputState.titulo}


        />
        <label  htmlFor="fecha">input de fecha</label>
          <input id ="fecha" name="fecha" type="text" 
          onChange={handleInputChange } 
          value={inputState.fecha}
    />
          <label  htmlFor="nota">input de nota</label>
          <input id ="nota" name="nota" type="text" 
          onChange={handleInputChange} 
          value={inputState.nota}
    />

    
      
    </div>              
  );
}

export default App;
