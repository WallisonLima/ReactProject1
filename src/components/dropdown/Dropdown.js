
import { useState } from 'react'

export const Dropdown = ({ title, options, onSelect }) => {
    const [isCar, setCar] = useState(false);

    const handleSelection = (option) =>{
        onSelect(option)
        setCar(false)
    }

    return (
        <div className='c-dropdown'>
            <button onClick={() => setCar(true)}>{title}</button>

            {isCar && (
                <ul role='menu'>
                    {options.map((option) =>(
                        <li
                            key={option}
                            role="menuitem"
                            onClick={() => handleSelection(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
          
            
        </div >        
    )
}