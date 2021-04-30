import { faAtom, faBook, faCameraRetro, faKiwiBird, faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../components/button/Button";
import './headrStyle.css'

export const Headr = () => {
    return (
        <header className='container'>
            <div className='containerLeft'>
                <div className='logo'>
                    <i className='iconLogo'>
                        <FontAwesomeIcon icon={faAtom} />
                    </i>
                    argon
                </div>
                <div className='containerLeftComponents'>Components</div>
                <div className='containerLeftComponents'>Examples</div>
            </div>
            <div className='containerRight'>
                <div className='ContainerRightIcons'>
                    <i className='icons'> <FontAwesomeIcon icon={faBook} /> </i>
                    <i className='icons'> <FontAwesomeIcon icon={faCameraRetro} /> </i>
                    <i className='icons'> <FontAwesomeIcon icon={faKiwiBird} /> </i>
                    <i className='icons'> <FontAwesomeIcon icon={faCat} /> </i>
                </div>
                <div className='buttonRigth'>
                    <Button content='DOWNLOAD' styleInfo='buttonHeadr' iconInfo='faCloudDownloadAlt'/>
                </div>
            </div>

        </header>
    )
}


