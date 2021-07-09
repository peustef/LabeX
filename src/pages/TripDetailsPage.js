import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goBack } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
import { getHeader } from '../constants/headers'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import starry from '../img/starry.jpg'

const MainContainer = styled.div`
    background-image: url(${starry});
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
`

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
    margin-right:16px;
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

    h3 {
      font-weight: 200;
        color: #595959; 
        font-size: 24px;
        margin:0;
    }

    p {
      font-weight: 200;
        color: #595959; 
    }
  
`

const PendingCandidateContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:30px;
    padding-right:30px;
    padding-top:16px;
    padding-bottom:16px;
    min-width:400px;
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
        margin-bottom:16px;
        
    }

    p {
      font-weight: 200;
        color: #595959; 
    }
  
`

const DetailsContainer = styled.div`
  display:flex;
  justify-content:space-around;
  width:90%;
`


function TripDetails() {
  const history = useHistory()
  const [trip, setTrip] = useState({})
  const params = useParams()
  const year = trip.date && trip.date.slice(0, 4)
  const month = trip.date && trip.date.slice(5, 7)
  const day = trip.date && trip.date.slice(8, 10)
  const orderedDate = `${day}/${month}/${year}`

  useProtectedPage();

  const getTripDetail = (id) => {
    axios.get(`${BASE_URL}/trip/${id}`, getHeader())
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

  }

  const onClickApprove = (tripId, candidateId, approvalDecision) => {
    const body = {
      approve: approvalDecision
    }

    axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, getHeader())
      .then(() => {
        if (approvalDecision === true) {
          alert("Candidato aprovado :)")
          getTripDetail(params.id)
        } else {
          alert("Candidato rejeitado :(")
          getTripDetail(params.id)
        }

      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    getTripDetail(params.id)
  }, [params.id])

  return (
    <MainContainer>
      <Header>
        <h1>{trip.name}</h1>
        <Button onClick={() => goBack(history)}>Voltar</Button>
      </Header>
      {trip.candidates ? (
        <DetailsContainer>

          <div>

            <TripCard>
              <h2>{trip.name}</h2>
              <p>{trip.description}</p>
              <p>Planeta: {trip.planet}</p>
              <p>Duração: {trip.durationInDays}</p>
              <p>Data: {orderedDate}</p>
            </TripCard>

            <TripCard>
              <h2>Candidatos aprovados</h2>
              {trip.approved && trip.approved.map((candidate) => {
                return <div key={candidate.id}>
                  <p>{candidate.name}</p>
                </div>
              })}
            </TripCard>
          </div>


          <PendingCandidateContainer>
            <h2>Candidatos Pendentes</h2>
            {trip.candidates && trip.candidates.map((candidate) => {
              return <TripCard key={candidate.id}>
                <h3>{candidate.name}</h3>
                <p>Profissão: {candidate.profession}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <p>{candidate.applicationText}</p>
                <ButtonContainer>
                  <Button onClick={() => onClickApprove(trip.id, candidate.id, false)}>Rejeitar</Button>
                  <Button onClick={() => onClickApprove(trip.id, candidate.id, true)}>Aprovar</Button>
                </ButtonContainer>
              </TripCard>
            })
            }
          </PendingCandidateContainer>
        </DetailsContainer>
      ) : (
        <TripCard><p>Carregando...</p></TripCard>
      )}

    </MainContainer>
  );
}

export default TripDetails;