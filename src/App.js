import { useState } from 'react';
import { Headr } from './templates/headr/Headr'
import { ContentTop } from './templates/contentTop/ContentTop'
import { Footr } from './templates/footr/Footr'
import { Button } from './components/button/Button'
import { Dropdown } from './components/dropdown/Dropdown';
import { List } from './components/list/List';
import { SelectedFunc } from './components/selected/SelectedFunc';
import { Image } from './components/image/Image'


const images = [
  { id: 1, url: 'https://png.pngtree.com/element_origin_min_pic/17/08/04/3528c203fea0c31986221c51e598a6d4.jpg', desc: 'wallison e lindo' },
  { id: 2, url: 'https://bellunotec.com.br/wp-content/uploads/2017/05/86390-saiba-como-aumentar-a-retencao-de-funcionarios-na-empresa.png', desc: 'dasda' },
  { id: 3, url: 'https://yata-apix-105195fa-67ad-42a1-baf6-b598678e83a2.lss.locawebcorp.com.br/302835255ae0421688d69220e04a59c6.png', desc: 'eqweqwe' },
]

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
    <body>
      <header>
        <Headr />
      </header>
      <div className="App" style={styles.contentAll} >
        <div sytle={styles.contentTop}>
          <ContentTop info={'argon'} />
        </div>
         
      </div>
      <div className='footr'>
        <Footr />
      </div>
    </body>
  );
}

export default App;


const styles = {
  contentAll: {
    display: 'flex',
    flexDirection: 'column',
    widht: '100%',
    background: '#e63946',
    alignItems: 'center',
    padding: '50px'
  },
 
}