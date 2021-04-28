

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
    title: {
        fontSize: 35,
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        alignText: 'center',
    },
    item: {
        marginTop: 10
    }
}

