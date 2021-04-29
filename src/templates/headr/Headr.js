import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Headr = () => {
    return (
        <header style={styles.container}>
            <div style={styles.logo}><i><FontAwesomeIcon icon={faAtom} /></i> argon</div>
            <div style={styles.options}>
                <div style={styles.item}>
                    <a style={styles.button}>
                        HOME
                    </a>
                </div>
                <div style={styles.item}>
                    <a style={styles.button}>
                        ABOUT
                    </a>
                </div>
                <div style={styles.item}>
                    <a style={styles.button}>
                        GALLERY
                    </a>
                </div>
                <div style={styles.item}>
                    <a style={styles.button}>
                        PORTFOLIO
                    </a>
                </div>
                <div style={styles.item}>
                    <a style={styles.button}>
                        CONTACT
                    </a>
                </div>

            </div>

        </header>
    )
}

const styles = {
    container: {
        display: 'flex',
        background: '#e63946',
        color: 'white',
        fontSize: 18,
        fontFamily: 'Arial',
        
    },
    logo: {
        padding: '15px 32px',
        marginLeft: '10%'
    },
    options: {
        display: 'flex',
        marginLeft: '30%'
    },
    item: {
        marginRigth: 40,
        marginLeft: 40
    },
    button: {
        backgroundColor: '#e63946',
        border: 'none',
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
    }
}

