import "./Login.css"
function Login() {
  return (
    <div className="container">
      <div className="content">       
        <h1>Bem-vindo!</h1>
      </div>

      <div className="login-area">
      <h1>Login</h1>
        <p>Bem-vindo de volta! Por favor, informe seus dados <br/> para fazer o login</p>
        <form>
          <label for="username">Usuário</label>
          <input type="username"  placeholder="Usuário" />
          <label for="password">Senha</label>
          <input type="password"  placeholder="Senha" />
          <input className="login-button" type="submit" value="login" onclick="lsRememberMe()"/>
        </form>
      </div>
      
    </div>
  )
}
export default Login