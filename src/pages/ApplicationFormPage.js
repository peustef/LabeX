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
        alert("Inscri????o realizada")
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
            title={"O nome deve ter no m??nimo 3 letras"}
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
            title={"O texto deve ter no m??nimo 30 caracteres"}
          />
          <input
            placeholder="Profiss??o"
            name="profession"
            type="text"
            value={form.profession}
            onChange={onChange}
            required
            pattern={"^.{10,}"}
            title={"O texto deve ter no m??nimo 10 caracteres"}
          />
          <select name="country" value={form.country}
            onChange={onChange} required>
            <option defaultValue="selected">Selecionar pa??s</option>
            <option>Brasil</option>
            <option>Afeganist??o</option>
            <option>??frica do Sul</option>
            <option>Alb??nia</option>
            <option>Alemanha</option>
            <option>Andorra</option>
            <option>Angola</option>
            <option>Anguilla</option>
            <option>Antilhas Holandesas</option>
            <option>Ant??rctida</option>
            <option>Ant??gua e Barbuda</option>
            <option>Argentina</option>
            <option>Arg??lia</option>
            <option>Arm??nia</option>
            <option>Aruba</option>
            <option>Ar??bia Saudita</option>
            <option>Austr??lia</option>
            <option>??ustria</option>
            <option>Azerbaij??o</option>
            <option>Bahamas</option>
            <option>Bahrein</option>
            <option>Bangladesh</option>
            <option>Barbados</option>
            <option>Belize</option>
            <option>Benim</option>
            <option>Bermudas</option>
            <option>Bielorr??ssia</option>
            <option>Bol??via</option>
            <option>Botswana</option>
            <option>Brunei</option>
            <option>Bulg??ria</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>But??o</option>
            <option>B??lgica</option>
            <option>B??snia e Herzegovina</option>
            <option>Cabo Verde</option>
            <option>Camar??es</option>
            <option>Camboja</option>
            <option>Canad??</option>
            <option>Catar</option>
            <option>Cazaquist??o</option>
            <option>Chade</option>
            <option>Chile</option>
            <option>China</option>
            <option>Chipre</option>
            <option>Col??mbia</option>
            <option>Comores</option>
            <option>Coreia do Norte</option>
            <option>Coreia do Sul</option>
            <option>Costa do Marfim</option>
            <option>Costa Rica</option>
            <option>Cro??cia</option>
            <option>Cuba</option>
            <option>Dinamarca</option>
            <option>Djibouti</option>
            <option>Dominica</option>
            <option>Egito</option>
            <option>El Salvador</option>
            <option>Emirados ??rabes Unidos</option>
            <option>Equador</option>
            <option>Eritreia</option>
            <option>Esc??cia</option>
            <option>Eslov??quia</option>
            <option>Eslov??nia</option>
            <option>Espanha</option>
            <option>Estados Federados da Micron??sia</option>
            <option>Estados Unidos</option>
            <option>Est??nia</option>
            <option>Eti??pia</option>
            <option>Fiji</option>
            <option>Filipinas</option>
            <option>Finl??ndia</option>
            <option>Fran??a</option>
            <option>Gab??o</option>
            <option>Gana</option>
            <option>Ge??rgia</option>
            <option>Gibraltar</option>
            <option>Granada</option>
            <option>Gronel??ndia</option>
            <option>Gr??cia</option>
            <option>Guadalupe</option>
            <option>Guam</option>
            <option>Guatemala</option>
            <option>Guernesei</option>
            <option>Guiana</option>
            <option>Guiana Francesa</option>
            <option>Guin??</option>
            <option>Guin?? Equatorial</option>
            <option>Guin??-Bissau</option>
            <option>G??mbia</option>
            <option>Haiti</option>
            <option>Honduras</option>
            <option>Hong Kong</option>
            <option>Hungria</option>
            <option>Ilha Bouvet</option>
            <option>Ilhas Cayman</option>
            <option>Ilhas Cocos (Keeling)</option>
            <option>Ilhas Cook</option>
            <option>Ilhas Fero??</option>
            <option>Ilhas Ge??rgia do Sul e Sandwich do Sul</option>
            <option>Ilhas Malvinas</option>
            <option>Ilhas Marshall</option>
            <option>Ilhas Salom??o</option>
            <option>Ilhas Virgens Americanas</option>
            <option>Ilhas Virgens Brit??nicas</option>
            <option>Ilhas ??land</option>
            <option>Indon??sia</option>
            <option>Inglaterra</option>
            <option>??ndia</option>
            <option>Iraque</option>
            <option>Irlanda do Norte</option>
            <option>Irlanda</option>
            <option>Ir??</option>
            <option>Isl??ndia</option>
            <option>Israel</option>
            <option>It??lia</option>
            <option>I??men</option>
            <option>Jamaica</option>
            <option>Jap??o</option>
            <option>Jersey</option>
            <option>Jord??nia</option>
            <option>Kiribati</option>
            <option>Kuwait</option>
            <option>Laos</option>
            <option>Lesoto</option>
            <option>Let??nia</option>
            <option>Lib??ria</option>
            <option>Liechtenstein</option>
            <option>Litu??nia</option>
            <option>Luxemburgo</option>
            <option>L??bano</option>
            <option>L??bia</option>
            <option>Macau</option>
            <option>Maced??nia</option>
            <option>Madag??scar</option>
            <option >Malawi</option>
            <option >Maldivas</option>
            <option >Mali</option>
            <option >Malta</option>
            <option >Mal??sia</option>
            <option >Marianas Setentrionais</option>
            <option >Marrocos</option>
            <option >Martinica</option>
            <option >Maurit??nia</option>
            <option >Maur??cia</option>
            <option >Mayotte</option>
            <option >Mold??via</option>
            <option >Mong??lia</option>
            <option >Montenegro</option>
            <option >Montserrat</option>
            <option >Mo??ambique</option>
            <option >Myanmar</option>
            <option >M??xico</option>
            <option >M??naco</option>
            <option >Nam??bia</option>
            <option >Nauru</option>
            <option >Nepal</option>
            <option >Nicar??gua</option>
            <option >Nig??ria</option>
            <option >Niue</option>
            <option >Noruega</option>
            <option >Nova Caled??nia</option>
            <option >Nova Zel??ndia</option>
            <option >N??ger</option>
            <option >Om??</option>
            <option >Palau</option>
            <option >Palestina</option>
            <option >Panam??</option>
            <option >Papua-Nova Guin??</option>
            <option >Paquist??o</option>
            <option >Paraguai</option>
            <option >Pa??s de Gales</option>
            <option >Pa??ses Baixos</option>
            <option >Peru</option>
            <option >Pitcairn</option>
            <option >Polin??sia Francesa</option>
            <option >Pol??nia</option>
            <option >Porto Rico</option>
            <option >Portugal</option>
            <option >Quirguist??o</option>
            <option >Qu??nia</option>
            <option >Reino Unido</option>
            <option >Rep??blica Centro-Africana</option>
            <option >Rep??blica Checa</option>
            <option >Rep??blica Democr??tica do Congo</option>
            <option >Rep??blica do Congo</option>
            <option >Rep??blica Dominicana</option>
            <option >Reuni??o</option>
            <option >Rom??nia</option>
            <option >Ruanda</option>
            <option >R??ssia</option>
            <option >Saara Ocidental</option>
            <option >Saint Martin</option>
            <option >Saint-Barth??lemy</option>
            <option >Saint-Pierre e Miquelon</option>
            <option >Samoa Americana</option>
            <option >Samoa</option>
            <option >Santa L??cia</option>
            <option >Senegal</option>
            <option >Serra Leoa</option>
            <option >Seychelles</option>
            <option >Singapura</option>
            <option >Som??lia</option>
            <option >Sri Lanka</option>
            <option >Suazil??ndia</option>
            <option >Sud??o</option>
            <option >Suriname</option>
            <option >Su??cia</option>
            <option >Su????a</option>
            <option >Svalbard e Jan Mayen</option>
            <option >S??o Crist??v??o e Nevis</option>
            <option >S??o Marino</option>
            <option >S??o Tom?? e Pr??ncipe</option>
            <option >S??o Vicente e Granadinas</option>
            <option >S??rvia</option>
            <option >S??ria</option>
            <option >Tadjiquist??o</option>
            <option >Tail??ndia</option>
            <option >Taiwan</option>
            <option >Tanz??nia</option>
            <option >Timor-Leste</option>
            <option >Togo</option>
            <option >Tonga</option>
            <option >Toquelau</option>
            <option >Trinidad e Tobago</option>
            <option >Tun??sia</option>
            <option >Turcas e Caicos</option>
            <option >Turquemenist??o</option>
            <option >Turquia</option>
            <option >Tuvalu</option>
            <option >Ucr??nia</option>
            <option >Uganda</option>
            <option >Uruguai</option>
            <option >Uzbequist??o</option>
            <option >Vanuatu</option>
            <option >Vaticano</option>
            <option >Venezuela</option>
            <option >Vietname</option>
            <option >Wallis e Futuna</option>
            <option >Zimbabwe</option>
            <option >Z??mbia</option>
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