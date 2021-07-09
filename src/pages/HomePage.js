import React from 'react';
import { useHistory } from 'react-router';
import { goToAdminHome, goToListTrips } from '../routes/coordinator';
import styled from 'styled-components';
import starry from '../img/starry.jpg'

const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:548px;
    height:392px;
    background-color:white;
    border-radius:8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    h1 {
        font-weight: 200;
        font-size: 64px;
        line-height: 75px;
        color: #595959; 
        margin-top: 0;   
    }
  
`

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width: 66%;

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
    background-image: url(${starry});
    width:100vw;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`


function Home() {
    const history = useHistory()
    return (
        <MainContainer>
            <HomeContainer>
                <h1>LabeX</h1>
                <ButtonContainer>
                    <Button onClick={() => goToListTrips(history)}>Viagens</Button>
                    <Button onClick={() => goToAdminHome(history)}>Admin</Button>
                </ButtonContainer>
            </HomeContainer>

        </MainContainer>
    );
}

export default Home;