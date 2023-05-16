import {ContainerStyled, ContentStyled} from "./Container.styled";

interface Props{
    children:React.ReactNode
}
const Container:React.FC<Props> = ({children}) =>{

    return (
        <ContainerStyled>
            <ContentStyled>
                {children}
            </ContentStyled>
        </ContainerStyled>
    )
}

export default Container;