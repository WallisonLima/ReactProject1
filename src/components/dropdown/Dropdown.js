
import { useState } from 'react'
import { styles } from './styleCss'

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
                                >
                                    <button style={styles.button}
                                        onClick={() => handleSelection(option)}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div >
    )
}

