import { Button } from "react-bootstrap"

function CustomButton({text, onClick}){
    return(
        <Button onClick={onClick} variant='none' className="w-100 text-light">{text}</Button>
    )
}

export default CustomButton