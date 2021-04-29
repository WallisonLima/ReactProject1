
import './style.css'

import { faCat, faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const selectIcon = (icon)=>{
    if(icon == 'faCloudDownloadAlt'){
        return <FontAwesomeIcon icon={faCloudDownloadAlt}/> 
    }
    else if(icon == 'faCat'){
        return <FontAwesomeIcon icon={faCat}/> 
    }
}


export const Button = ({styleInfo, iconInfo, content}) => {
    return (
        <>
        <button className={styleInfo}>
            <i style={{ marginRight: '15px' }}>
                {iconInfo && selectIcon(iconInfo)}
            </i>
            {content}
        </button>
        </>
    )
}

