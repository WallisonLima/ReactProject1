
export const List = ({title, options}) =>{
    return(
        <div>
        <div>{title}</div>
        <ul>
            {options.map((option)=>(
                <li>{option}</li>
                ))}
        </ul>
        </div>
    );
};