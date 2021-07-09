import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import useRequestData from '../hooks/useRequestData';
import { goBack, goToHome } from '../routes/coordinator';
import styled from 'styled-components';
import starry from '../img/starry.jpg'

const ApplicationFormContainer = styled.form`
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

function ApplicationForm() {
  const history = useHistory()
  const [trips] = useRequestData(`${BASE_URL}/trips`, {})

  const { form, onChange, cleanFields } = useForm(
    {
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "",
      id: ""
    }
  )



  const onSubmitApplication = (event) => {
    event.preventDefault()
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`${BASE_URL}/trips/${form.id}/apply`, body)
      .then(() => {
        goToHome(history)
        alert("Inscrição realizada")
      })
      .catch((err) => {
        alert(err.response.data.message)
      })

    cleanFields()
  }

  return (
    <MainContainer>

      <ApplicationFormContainer onSubmit={onSubmitApplication}>
        <h1>Inscreva-se</h1>
        <InputContainer>

          <select name="id" value={form.id}
            onChange={onChange} required>
            <option defaultValue="selected">Selecionar viagem</option>
            {trips.trips && trips.trips.map((trip) => {
              return <option value={trip.id} key={trip.id}>{trip.name} - {trip.planet}</option>
            })}
          </select>
          <input
            placeholder="Nome"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
          />
          <input
            placeholder="Idade"
            type="number"
            name="age"
            value={form.age}
            onChange={onChange}
            required
            min={18}
          />
          <input
            placeholder="Texto de Candidatura"
            name="applicationText"
            type="text"
            value={form.applicationText}
            onChange={onChange}
            required
            pattern={"^.{30,}"}
            title={"O texto deve ter no mínimo 30 caracteres"}
          />
          <input
            placeholder="Profissão"
            name="profession"
            type="text"
            value={form.profession}
            onChange={onChange}
            required
            pattern={"^.{10,}"}
            title={"O texto deve ter no mínimo 10 caracteres"}
          />
          <select name="country" value={form.country}
            onChange={onChange} required>
            <option defaultValue="selected">Selecionar país</option>
            <option>Brasil</option>
            <option>Afeganistão</option>
            <option>África do Sul</option>
            <option>Albânia</option>
            <option>Alemanha</option>
            <option>Andorra</option>
            <option>Angola</option>
            <option>Anguilla</option>
            <option>Antilhas Holandesas</option>
            <option>Antárctida</option>
            <option>Antígua e Barbuda</option>
            <option>Argentina</option>
            <option>Argélia</option>
            <option>Armênia</option>
            <option>Aruba</option>
            <option>Arábia Saudita</option>
            <option>Austrália</option>
            <option>Áustria</option>
            <option>Azerbaijão</option>
            <option>Bahamas</option>
            <option>Bahrein</option>
            <option>Bangladesh</option>
            <option>Barbados</option>
            <option>Belize</option>
            <option>Benim</option>
            <option>Bermudas</option>
            <option>Bielorrússia</option>
            <option>Bolívia</option>
            <option>Botswana</option>
            <option>Brunei</option>
            <option>Bulgária</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>Butão</option>
            <option>Bélgica</option>
            <option>Bósnia e Herzegovina</option>
            <option>Cabo Verde</option>
            <option>Camarões</option>
            <option>Camboja</option>
            <option>Canadá</option>
            <option>Catar</option>
            <option>Cazaquistão</option>
            <option>Chade</option>
            <option>Chile</option>
            <option>China</option>
            <option>Chipre</option>
            <option>Colômbia</option>
            <option>Comores</option>
            <option>Coreia do Norte</option>
            <option>Coreia do Sul</option>
            <option>Costa do Marfim</option>
            <option>Costa Rica</option>
            <option>Croácia</option>
            <option>Cuba</option>
            <option>Dinamarca</option>
            <option>Djibouti</option>
            <option>Dominica</option>
            <option>Egito</option>
            <option>El Salvador</option>
            <option>Emirados Árabes Unidos</option>
            <option>Equador</option>
            <option>Eritreia</option>
            <option>Escócia</option>
            <option>Eslováquia</option>
            <option>Eslovênia</option>
            <option>Espanha</option>
            <option>Estados Federados da Micronésia</option>
            <option>Estados Unidos</option>
            <option>Estônia</option>
            <option>Etiópia</option>
            <option>Fiji</option>
            <option>Filipinas</option>
            <option>Finlândia</option>
            <option>França</option>
            <option>Gabão</option>
            <option>Gana</option>
            <option>Geórgia</option>
            <option>Gibraltar</option>
            <option>Granada</option>
            <option>Gronelândia</option>
            <option>Grécia</option>
            <option>Guadalupe</option>
            <option>Guam</option>
            <option>Guatemala</option>
            <option>Guernesei</option>
            <option>Guiana</option>
            <option>Guiana Francesa</option>
            <option>Guiné</option>
            <option>Guiné Equatorial</option>
            <option>Guiné-Bissau</option>
            <option>Gâmbia</option>
            <option>Haiti</option>
            <option>Honduras</option>
            <option>Hong Kong</option>
            <option>Hungria</option>
            <option>Ilha Bouvet</option>
            <option>Ilhas Cayman</option>
            <option>Ilhas Cocos (Keeling)</option>
            <option>Ilhas Cook</option>
            <option>Ilhas Feroé</option>
            <option>Ilhas Geórgia do Sul e Sandwich do Sul</option>
            <option>Ilhas Malvinas</option>
            <option>Ilhas Marshall</option>
            <option>Ilhas Salomão</option>
            <option>Ilhas Virgens Americanas</option>
            <option>Ilhas Virgens Britânicas</option>
            <option>Ilhas Åland</option>
            <option>Indonésia</option>
            <option>Inglaterra</option>
            <option>Índia</option>
            <option>Iraque</option>
            <option>Irlanda do Norte</option>
            <option>Irlanda</option>
            <option>Irã</option>
            <option>Islândia</option>
            <option>Israel</option>
            <option>Itália</option>
            <option>Iêmen</option>
            <option>Jamaica</option>
            <option>Japão</option>
            <option>Jersey</option>
            <option>Jordânia</option>
            <option>Kiribati</option>
            <option>Kuwait</option>
            <option>Laos</option>
            <option>Lesoto</option>
            <option>Letônia</option>
            <option>Libéria</option>
            <option>Liechtenstein</option>
            <option>Lituânia</option>
            <option>Luxemburgo</option>
            <option>Líbano</option>
            <option>Líbia</option>
            <option>Macau</option>
            <option>Macedônia</option>
            <option>Madagáscar</option>
            <option >Malawi</option>
            <option >Maldivas</option>
            <option >Mali</option>
            <option >Malta</option>
            <option >Malásia</option>
            <option >Marianas Setentrionais</option>
            <option >Marrocos</option>
            <option >Martinica</option>
            <option >Mauritânia</option>
            <option >Maurícia</option>
            <option >Mayotte</option>
            <option >Moldávia</option>
            <option >Mongólia</option>
            <option >Montenegro</option>
            <option >Montserrat</option>
            <option >Moçambique</option>
            <option >Myanmar</option>
            <option >México</option>
            <option >Mônaco</option>
            <option >Namíbia</option>
            <option >Nauru</option>
            <option >Nepal</option>
            <option >Nicarágua</option>
            <option >Nigéria</option>
            <option >Niue</option>
            <option >Noruega</option>
            <option >Nova Caledônia</option>
            <option >Nova Zelândia</option>
            <option >Níger</option>
            <option >Omã</option>
            <option >Palau</option>
            <option >Palestina</option>
            <option >Panamá</option>
            <option >Papua-Nova Guiné</option>
            <option >Paquistão</option>
            <option >Paraguai</option>
            <option >País de Gales</option>
            <option >Países Baixos</option>
            <option >Peru</option>
            <option >Pitcairn</option>
            <option >Polinésia Francesa</option>
            <option >Polônia</option>
            <option >Porto Rico</option>
            <option >Portugal</option>
            <option >Quirguistão</option>
            <option >Quênia</option>
            <option >Reino Unido</option>
            <option >República Centro-Africana</option>
            <option >República Checa</option>
            <option >República Democrática do Congo</option>
            <option >República do Congo</option>
            <option >República Dominicana</option>
            <option >Reunião</option>
            <option >Romênia</option>
            <option >Ruanda</option>
            <option >Rússia</option>
            <option >Saara Ocidental</option>
            <option >Saint Martin</option>
            <option >Saint-Barthélemy</option>
            <option >Saint-Pierre e Miquelon</option>
            <option >Samoa Americana</option>
            <option >Samoa</option>
            <option >Santa Lúcia</option>
            <option >Senegal</option>
            <option >Serra Leoa</option>
            <option >Seychelles</option>
            <option >Singapura</option>
            <option >Somália</option>
            <option >Sri Lanka</option>
            <option >Suazilândia</option>
            <option >Sudão</option>
            <option >Suriname</option>
            <option >Suécia</option>
            <option >Suíça</option>
            <option >Svalbard e Jan Mayen</option>
            <option >São Cristóvão e Nevis</option>
            <option >São Marino</option>
            <option >São Tomé e Príncipe</option>
            <option >São Vicente e Granadinas</option>
            <option >Sérvia</option>
            <option >Síria</option>
            <option >Tadjiquistão</option>
            <option >Tailândia</option>
            <option >Taiwan</option>
            <option >Tanzânia</option>
            <option >Timor-Leste</option>
            <option >Togo</option>
            <option >Tonga</option>
            <option >Toquelau</option>
            <option >Trinidad e Tobago</option>
            <option >Tunísia</option>
            <option >Turcas e Caicos</option>
            <option >Turquemenistão</option>
            <option >Turquia</option>
            <option >Tuvalu</option>
            <option >Ucrânia</option>
            <option >Uganda</option>
            <option >Uruguai</option>
            <option >Uzbequistão</option>
            <option >Vanuatu</option>
            <option >Vaticano</option>
            <option >Venezuela</option>
            <option >Vietname</option>
            <option >Wallis e Futuna</option>
            <option >Zimbabwe</option>
            <option >Zâmbia</option>
          </select>
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={() => goBack(history)}>Voltar</Button>
          <Button>Enviar</Button>
        </ButtonContainer>

      </ApplicationFormContainer>

    </MainContainer>
  );
}

export default ApplicationForm;