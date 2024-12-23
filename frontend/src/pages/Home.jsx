import { Container } from "react-bootstrap"
import ColumnText  from "../features/Home_page/ColumnText/ColumnText"

function Home({setSelectedSection}){
    return(
            <Container style={{color:'white',height:'60%',width:'100%', border:'1px solid white', marginTop:'8%'}}className="p-0">
                <ColumnText  setSelectedSection={setSelectedSection}/>
            </Container>
        
    )
}

export default Home