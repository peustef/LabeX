import axios from 'axios';
import React, { } from 'react';
import { useHistory } from 'react-router';
import { getHeader } from '../constants/headers';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { goBack } from '../routes/coordinator';
import styled from 'styled-components';
import starry from '../img/starry.jpg'

const CreateForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:548px;
    height:648px;
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

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:16px;
    width: 100%;
    
    
    align-items:center;
    justify-content:space-between;

    
    input{
      width: 439px;
      height: 43px;
      margin-bottom:16px;
      padding-left:8px;
  
      background: #F3F3F3;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 8px;
    }
    select{
      width: 439px;
      height: 43px;
      margin-bottom:16px;
      padding-left:8px;
  
      background: #F3F3F3;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 8px;
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
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

function CreateTrip() {
  const history = useHistory()
  const { form, onChange, cleanFields } = useForm(
    {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: ""
    })

  useProtectedPage();

  const onSubmitCreateTrip = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/trips`, form, getHeader())
      .then(() => {
        alert("Viagem criada com sucesso!")
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    cleanFields()
  }

  return (
    <MainContainer>
      <CreateForm onSubmit={onSubmitCreateTrip}>
        <h1>CreateTrip</h1>
        <InputContainer>
          <input
            placeholder="Nome"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            required
            pattern={"^.{5,}"}
            title={"O nome da viagem deve ter no mínimo 5 letras"}
          />
          <select
            placeholder="Planeta"
            name="planet"
            value={form.planet}
            onChange={onChange}
            required
          >
            <option defaultValue="selected">Selecionar planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>
          </select>
          <input
            placeholder="Data"
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            required
          />
          <input
            placeholder="Descrição"
            name="description"
            type="text"
            value={form.description}
            onChange={onChange}
            required
            pattern={"^.{30,}"}
            title={"A descrição da viagem deve ter no mínimo 30 caracteres"}
          />
          <input
            placeholder="Duração em dias"
            type="number"
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            required
            min={50}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={() => goBack(history)}>Voltar</Button>
          <Button>Criar</Button>
        </ButtonContainer>
      </CreateForm>
    </MainContainer>
  );
}

export default CreateTrip;