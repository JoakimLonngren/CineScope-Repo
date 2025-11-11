import Button from "react-bootstrap/Button";
import type { ButtonProps } from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface GlobalButtonProps extends ButtonProps {
    isBack?: boolean; //if true this button will have a go-back function.
    label?: string; //for the label/title.
}

export const GlobalButton: React.FC<GlobalButtonProps> = ({
    isBack = false,
    label,
    onClick,
    children,
    ...rest
}) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(isBack){
            navigate(-1);
        } else if (onClick) {
            onClick(e);
        }
    };

    return(
        <Button onClick={handleClick} {...rest} className="d-flex align-items-center">
            {children ?? label ?? (isBack ? <><BsArrowLeft/></> : "Click")}
        </Button>
    )
}
export default GlobalButton