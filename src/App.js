import { Dropdown } from './components/dropdown/Dropdown';
import { useState } from 'react'

function App(){

  const [selectCar, setSelectCar] = useState(null)

  return (
    <div className="App">
      {selectCar && <div>Seu Carro {selectCar} </div>}
      <Dropdown 
        title="Selecione seu carro" 
        options={['gol', 'mercedes', 'bmw']}
        onSelect={setSelectCar}
      />
    </div>
  );
}

export default App;
