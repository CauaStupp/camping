import { validateForm } from './functions/validateForm';
import Logo from './assets/logo.svg';
import ImageLeft from './assets/side-image.jpg';
import IconTitle from './assets/log-in.svg';
import './styles/global.css';
import './styles/form.css';
import './styles/imageLeft.css';


document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="form">
      <header>
        <img src="${Logo}" alt="logo"/>
      </header>

      <div class="form-content">
        <div class="title">
          <h1>
            <img src="${IconTitle}" alt="Icone do titulo"/>
            Faça seu login
          </h1>
          <p>Entre com suas informações de cadastro.</p>
        </div>
        
        <form>
          <div class="inputs">
            <label>
              <span>E-mail</span>
              <input type="email" id="email" name="email" placeholder="Digite seu e-mail"/>
              <p class="error"></p>
            </label>
            <label>
              <span>Senha</span>
              <input type="password" id="password" name="password" placeholder="Digite sua senha"/>
              <p class="error"></p>
              <div class="viewPassword"></div>
            </label>
          </div>
          

          <div class="remember">
            <label>
              <input type="checkbox" id="check" name="check"/>
              <div class="checkbox"></div>
              <span>Lembrar-me</span>
            </label>
            <a href="#">Esqueci a minha senha</a>
          </div>

          <button class="btn">Entrar</button>

          <div class="register">
            <span>Não tem uma conta?</span>
            <a href="#">Registre-se</a>
          </div>
        </form>
      </div>
    </div>

    <div class="bg-img">
      <img src="${ImageLeft}" alt="Imagem de fundo de um carro na floresta"/>
    </div>
  </div>
`



validateForm();