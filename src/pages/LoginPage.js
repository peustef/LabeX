import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../constants/urls';
import { goToAdminHome, goToHome } from '../routes/coordinator';
import useForm from '../hooks/useForm'
import styled from 'styled-components';
import starry from '../img/starry.jpg'

const LoginForm = styled.form`
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

function Login() {
  const history = useHistory()

  const { form, onChange, cleanFields } = useForm({ email: "", password: "" })


  const login = (event) => {
    event.preventDefault()

    axios.post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        goToAdminHome(history)
      })
      .catch((err) => {
        alert(err.response.data.message)
        cleanFields()
      })
  }
  return (
    <MainContainer>

      <LoginForm onSubmit={login}>
        <h1>Login</h1>
        <InputContainer>
          <input
            name="email"
            type="email"
            placeholder='Email'
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder='Senha'
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={() => goToHome(history)}>Voltar</Button>
          <Button>Entrar</Button>
        </ButtonContainer>
      </LoginForm>
    </MainContainer>
  );
}

export default Login;