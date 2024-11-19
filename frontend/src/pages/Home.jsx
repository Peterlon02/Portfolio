import { Container } from "react-bootstrap"
import ContainerText from "../features/Home_page/ContainerText/ContainerText"

function Home(){
    return(
            <Container style={{color:'white',height:'60%', border:'1px solid white', marginTop:'8%'}}className="p-0">
                <ContainerText />
            </Container>
        
    )
}

export default Home