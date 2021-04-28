
import { styles } from './styleCss'


export const List = ({ title, options }) => {
    return (
        <div style={styles.container}>
            <div>
                <div style={styles.title}>
                    <div>{title}</div>
                </div>
                <div style={styles.list}>
                    <ul>
                        {options.map((option) => (
                            <li style={styles.item}>{option}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};



