import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import starry from '../img/starry.jpg'


const TripCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:30px;
    padding-right:30px;
    padding-top:16px;
    padding-bottom:16px;
    width:400px;
    background-color:white;
    border-radius:8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-sizing:border-box;
    margin-bottom:48px;
    
    h1 {
        font-weight: 200;
        color: #595959; 
        font-size: 32px;
        margin:0;
        
    }

    p {
      font-weight: 200;
        color: #595959; 
    }
  
`

const Button = styled.button`
    width: 134px;
    height: 68px;
    font-size: 24px;
    color: #595959;   
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.22);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    text-align:center;
    &:hover{
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s;
    }
`

const MainContainer = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image: url(${starry});
`


const ErrorPage = () => {
    const history = useHistory();
    return (
        <MainContainer>

            <TripCard>
                <h1>Erro 404 - Essa página não existe!</h1>
                <Button onClick={history.goBack}>Voltar</Button>
            </TripCard>
        </MainContainer>
    );
};

export default ErrorPage;
