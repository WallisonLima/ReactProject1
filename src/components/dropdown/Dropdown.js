
import { useState } from 'react'

export const Dropdown = ({ title, options, onSelect }) => {
    const [isCar, setCar] = useState(false);

    const handleSelection = (option) => {
        onSelect(option)
        setCar(false)
    }

    return (
        <div style={styles.container}>
            <div>
                <button onClick={() => setCar(true)} style={styles.button}>{title}</button>
                {isCar && (
                    <div style={styles.list}>
                        <ul role='menu'>
                            {options.map((option) => (
                                <li style={styles.item}
                                    key={option}
                                    role="menuitem"
                                    onClick={() => handleSelection(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div >
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
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        background: '#1890ff',
        color: '#fff',
        fontSize: '14px',
        cursor: 'pointer',
        transition: '.3s background',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        alignText: 'center',
    }, 
    item:{
        marginTop: 10
    }

}