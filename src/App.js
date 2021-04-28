import { Dropdown } from './components/dropdown/Dropdown';
import { List } from './components/list/List';
import { useState } from 'react';

function App() {
  const options = ['gol', 'mercedes', 'bmw']
  const [selectCar, setSelectCar] = useState(null)
  const [optionList, setOptionList] = useState(options)

  const setSelectCarResp = (option) => {
    setSelectCar(option)
    setOptionListCont(option)
    return true
  }

  const setOptionListCont = (option) => {
    let obj = options.indexOf(option)
    if (obj > -1) {
      options.splice(obj, 1);
    }
    return setOptionList(options)

  }


  return (
    <div className="App">
      {selectCar && <div>Seu Carro é {selectCar} </div>}

      <List
        title={"Lista de carros"}
        options={optionList}
      />


      <Dropdown
        title="Selecione seu carro"
        options={options}
        onSelect={setSelectCarResp}
      />

    </div>
  );
}

export default App;
