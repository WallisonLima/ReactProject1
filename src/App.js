import { useState } from 'react';
import { Dropdown } from './components/dropdown/Dropdown';
import { List } from './components/list/List';
import { SelectedFunc } from './components/selected/SelectedFunc'


function App() {
  const options = ['Bilbo', 'Guima', 'Vitao']
  const [selectFunc, setSelectCar] = useState(null)
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

      <List
        title={"Lista de Funcionários"}
        options={optionList}
      />
      <Dropdown
        title="Selecione um Funcionário"
        options={optionList}
        onSelect={setSelectCarResp}
      />
      {selectFunc && <SelectedFunc select={selectFunc} />}
    </div>
  );
}

export default App;
