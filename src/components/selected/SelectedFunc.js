

export const SelectedFunc = ({ select }) => {
    return (
        <div style={styles.container}>
            <div style={styles.text}>Funcionário selecionado: {select} </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '80px',
        color: 'white',
        border: '1px solid #1890ff',
        background: '#e63946'
    },
    text:{
        fontSize: 18
    }
}


