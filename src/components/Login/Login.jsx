import "./Login.css"
import React from "react"

function Login() {
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
        return 'Estado: ' + response.logadrouro + 'Bairro: ' + response.bairro + 'Cidade/UF' + response.localidade + '/' + response.uf
      }
    }

    request.send()
  }
  function EmailChange(event) {
    localStorage.setItem('Email', event.target.value);
  }
  
  function PassChange(event) {
    localStorage.setItem('Password', event.target.value);
  }
  
  function NameChange(event) {
    localStorage.setItem('name', event.target.value);
  }
  
  function NumberChange(event) {
    localStorage.setItem('number', event.target.value);
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
        <form>

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
          
          <label htmlFor="address">Endereço</label>
          <input  placeholder="Endereço" name="address" onChange={EmailChange}/>

          <input className="login-button" type="submit" value="Cadastrar"/>
        </form>
      </div>
    </div>
  )
}

export default Login
