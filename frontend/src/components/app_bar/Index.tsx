import styled from "styled-components"
import NavigationBar from './NavigationBar'

export default function Index() {


  return(
    <Box>
        <div className="logo"/>
        <NavigationBar/>
    </Box>
  )
}

const Box = styled.div`
position: fixed;
display: flex;
align-items:center ;
justify-content:space-between ;
top:0;
z-index:999 ;
width:100% ;
height:72px ;
background-color:#000 ;

.logo{
    width: 250px ;
}
`