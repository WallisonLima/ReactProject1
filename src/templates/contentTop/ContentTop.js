import './style.css'
import { faAtom, faMehBlank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from '../../components/button/Button'

export const ContentTop = ({ info }) => {
    return (
        <div className='containerContentTop'>
            <div>
                <text className='containerTitle'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faAtom} />
                    </div>
                    <div className='title'>
                        {info}
                    </div>
                </text>
            </div>
            <div className='containerDesc' >
                <text className='contentDescText'>A beautiful Design System for Boostrap 4. It's Free and Open Source</text>
            </div>
            <div className='containerButton'>
                <div className='contentButton'>
                    <Button 
                        styleInfo='button1' 
                        iconInfo='faCloudDownloadAlt'
                        content='DOWNLOAD REACT'
                    />
                </div>
                <div className='contentButton'>
                    <Button 
                        styleInfo='button2' 
                        iconInfo='faCat'
                        content='STAR US ON GITHUB'
                    />
                </div>
            </div>
            <div className='containerBack'>
                <text>*proudly coded by <i><FontAwesomeIcon icon={faMehBlank} /></i> Creative Tim</text>
            </div>

        </div>
    )
}

