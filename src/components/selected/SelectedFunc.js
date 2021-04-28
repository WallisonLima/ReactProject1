import { styles } from './styleCss'

export const SelectedFunc = ({ select }) => {
    return (
        <div style={styles.container}>
            <div style={styles.text}>Funcionário selecionado: {select} </div>
        </div>
    )
}




