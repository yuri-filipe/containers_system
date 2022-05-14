import styled from "styled-components";
import Form from './Form'
export default function Index() {
  return (
    <Box>
      <div className="section-title">
        <h1>Cadastro de Movimentações</h1>
      </div>
      <Form/>
    </Box>
  );
}

const Box = styled.div`
display: flex;
flex-direction:column ;
align-items:center ;
width: 80%;
height: 70vh;
margin-top: 60px;


.section-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 16px;
    border-radius: 6px;
  }
  h1 {
    color: ${(props) => props.theme.colors.title};
    font-size: 2rem;
    font-weight: bold;
  }

`