


export const Title = ({info})=>{
    return (
        <div style={styles.container}>
            <div style={styles.icon}>
                icon
            </div>
            <div style={styles.title}>
                {info}
            </div>
        </div>
    )
}




const styles = {
    container:{
        display: 'flex',
        width: '100%',
        color: 'white',
        fontFamily: 'Arial',
        padding: '20px',
        height:'80px',
    },
    icon:{
        marginRight: 15
    },
    title:{
        fontSize: 70,
        fontWeight: '950'
    }

}