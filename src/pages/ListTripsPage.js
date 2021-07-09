import React from 'react';
import { useHistory } from 'react-router';
import { goBack, goToApplicationForm } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'
import styled from 'styled-components';
import starry from '../img/starry.jpg'

const Header = styled.div`
  display:flex;
  width:100vw;
  justify-content:space-between;
  align-items:center;
  padding: 0 16px 0 16px;
  box-sizing:border-box;
  background-color:white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom:48px;
    h1 {
        font-weight: 200;
        font-size: 48px;
   
        color: #595959; 
      
      }
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-around;
    width: 30%;

`

const Button = styled.button`
    width: 98px;
    height: 52px; 
    font-size: 16px;
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
    
    h2 {
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


const MainContainer = styled.div`
    background-image: url(${starry});
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
`


function ListTrips() {
  const history = useHistory()
  const [trips] = useRequestData(`${BASE_URL}/trips`, {})


  return (
    <MainContainer>
      <Header>
        <h1>Lista de Viagens</h1>
        <ButtonContainer>
          <Button onClick={() => goToApplicationForm(history)}>Inscrição</Button>
          <Button onClick={() => goBack(history)}>Voltar</Button>
        </ButtonContainer>
      </Header>

      {trips.trips ? (
        trips.trips.map((trip) => {
          return <TripCard key={trip.id}>
            <h2>{trip.name}</h2>
            <p>{trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Data: {trip.date}</p>
            <Button onClick={() => goToApplicationForm(history)}>Inscrição</Button>
          </TripCard>
        })
      ) : (
        <TripCard><p>Carregando...</p></TripCard>
      )}


    </MainContainer>
  );
}

export default ListTrips;