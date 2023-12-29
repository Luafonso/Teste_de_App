import ImagemTopo from './assets/ImagemTopo.svg';
import Logo from './assets/Logo.svg'
import './global.css'

export function App() {
  return <div className="container">
    <header className="imagem">
      <img src={ImagemTopo} alt="ImagemTop" />
    </header>
    <header className="logo">
      <img src={Logo} alt="Logo" />
    </header>
    <header className="header">
      <span>A new way to experience real state in the infinite virtual space.</span>
    </header>

    <h3 className='Login'>Login</h3>
    <form>
      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder='robert.langster@gmail.com' />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" placeholder='********' />
      </div>

      <a href="">Forgot password?</a>

      <button className="buttonLogin">
        Login
      </button>

      <button className="buttonSignUp">
        Sign Up
      </button>

      <p className='textoOpcao'>Or, login with</p>

      <button className="facebook">
        Facebook
      </button>

      <button className="linkedIn">
        Linked In
      </button>

      <button className="google">
        google
      </button>
    </form>
  </div>
}
