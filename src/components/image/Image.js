

export const Image = ({ images }) => {
    return (
        <div>
            {images.map((image) => (
                <img className="Avatar" src={image.url}/> 
            ))}
        </div>

    )
}