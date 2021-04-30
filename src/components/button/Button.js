
import './buttonStyle.css'

import { faCat, faCloudDownloadAlt, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const selectIcon = (icon) => {
    if (icon == 'faCloudDownloadAlt') {
        return (
            <i style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faCloudDownloadAlt} />
            </i>
        )

    }
    else if (icon == 'faCat') {
        return (
            <i style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faCat} />
            </i>
        )
    }
    else if (icon == 'faShoppingBag') {
        return (
            <i style={{ marginRight: '15px', marginLeft: '15px' }}>
                <FontAwesomeIcon icon={faShoppingBag} />
            </i>
        )
    }
}

const writeItem = (content) => {
    return <text style={{padding: '10px 10px 10px 10px'}}>{content}</text>
}

export const Button = ({ styleInfo, iconInfo, content }) => {
    return (
        <>
            <button className={styleInfo}>
                {iconInfo && selectIcon(iconInfo)}
                {content && writeItem(content)}
            </button>
        </>
    )
}

