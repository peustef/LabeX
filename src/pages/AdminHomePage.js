
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { getHeader } from '../constants/headers';
import { BASE_URL } from '../constants/urls';
import { useProtectedPage } from '../hooks/useProtectedPage';
import useRequestData from '../hooks/useRequestData';
import { goToCreateTrip, goToHome, goToTripDetails } from '../routes/coordinator';
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
    justify-content:space-between;
    align-items:center;
    padding-left:30px;
    padding-right:30px;
    padding-top:16px;
    padding-bottom:16px;
    width:800px;
    background-color:white;
    border-radius:8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-sizing:border-box;
    margin-bottom:48px;
    
    h2 {
        font-weight: 200;
        color: #595959; 
        font-size: 24px;
        margin:0;
           &:hover{
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s;
    }
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

const DeleteButton = styled.button`
  background-color: white;
  color: #595959; 
  border: 2px solid #e7e7e7;
  &:hover{
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s;
    }
`

function AdminHome() {
  const history = useHistory()
  const [trips, getData] = useRequestData(`${BASE_URL}/trips`, {})

  useProtectedPage();

  const onclickLogout = () => {
    localStorage.removeItem("token")
    goToHome(history)
  }

  const deleteTrip = (id) => {
    axios.delete(`${BASE_URL}/trips/${id}`, getHeader())
      .then(() => {
        alert("Viagem deletada")
        getData(`${BASE_URL}/trips`)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  return (
    <MainContainer>
      <Header>
        <h1>Painel Administrativo</h1>
        <ButtonContainer>
          <Button onClick={() => goToCreateTrip(history)}>Criar Viagem</Button>
          <Button onClick={() => goToHome(history)}>Voltar</Button>
          <Button onClick={onclickLogout}>Logout</Button>
        </ButtonContainer>
      </Header>

      {trips.trips ? (
        trips.trips.map((trip) => {
          return <TripCard key={trip.id}>
            <h2 onClick={() => goToTripDetails(history, trip.id)}>{trip.name} - {trip.planet}</h2>
            <DeleteButton onClick={() => deleteTrip(trip.id)}>x</DeleteButton>

          </TripCard>
        })
      ) : (
        <TripCard><p>Carregando...</p></TripCard>
      )}

    </MainContainer>
  );
}

export default AdminHome;