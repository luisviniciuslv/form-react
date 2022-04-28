import "./Login.css"
import {useState} from "react"

function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [bairro, setBairro] = useState('')
  const [rua, setRua] = useState('')

  function consultaCep(cep){
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.onerror = function(e){
      return 'cep invalido'
    }
    request.onload = () => {
      var response = JSON.parse(request.responseText);

      if(response.erro === true){
        return 'cep não encontrado'
      } else {
        setEstado(response.uf);
        setCidade(response.localidade);
        setBairro(response.bairro);
        setRua(response.logradouro)
      }
    }

    request.send()
  }
  function EmailChange(event) {
    setEmail(event.target.value)
  }
  
  function PassChange(event) {
    setPassword(event.target.value)
  }
  
  function NameChange(event) {
    //localStorage.setItem('name', event.target.value);
  }
  
  function NumberChange(event) {
    //localStorage.setItem('number', event.target.value);
  }

  function HandleSubmit(event) {
    event.preventDefault();
  }

  function SetLocal(email, pass, name, number){
    localStorage.setItem('Email', email);
    localStorage.setItem('Pass', pass);
    localStorage.setItem('name', name);
    localStorage.setItem('number', number);
  }

  function CepChange(event) {
    if(event.target.value.length === 8){
      localStorage.setItem('cep', event.target.value);
      const local = consultaCep(localStorage.getItem('cep'))
      console.log(local)
    }else{
      localStorage.setItem('cep', '');
    }
  }

  return (
    <div className="container">
      <div className="content">       
        <h1>Bem-vindo!</h1>
      </div>
      <div className="login-area">
      <h1>Cadastre-se</h1>
        <p> Por favor, informe seus dados abaixo <br/> para fazer o registro</p>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="name">Nome Completo</label>
          <input type="text"  placeholder="Nome" name="name" onChange={NameChange}/>

          <label htmlFor="username">E-mail</label>
          <input  placeholder="E-mail" name="Email" onChange={EmailChange}/>

          <label htmlFor="password">Senha</label>
          <input type="password"  placeholder="Senha" name="password" onChange={PassChange}/>

          <label htmlFor="tel">Telefone</label>
          <input type="tel"  placeholder="912345678" name="phone" onChange={NumberChange} maxLength="11" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

          <label htmlFor="cep">Cep</label>
          <input input type="tel"  placeholder="01234567" name="Cep" onChange={CepChange} maxLength="8" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

          <h5>Estado: {estado}</h5>
          <h5>Cidade: {cidade}</h5>
          <h5>Bairro: {bairro}</h5>
          <h5>rua: {rua}</h5>
          <input className="login-button" type="submit" value="Cadastrar" onClick={SetLocal(email, password, 0, 0)}/>
        </form>
      </div>
    </div>
  )
}

export default Login
