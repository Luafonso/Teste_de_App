import * as React from 'react'
import ImagemTopo from './assets/ImagemTopo.svg'
import Desktop from './assets/TelaDesktop.svg'
import Logo from './assets/Logo.svg'
import './global.css'
import Eye from './assets/olho.svg'

export function App() {

  const matches = usedMediaQuery('(min-width:600px)');
      const ImagemDesktop = {Desktop};
      const Topo = {ImagemTopo};
      const [Imagem, setImagem] = React.useState("");
      React.useEffect(() =>{
        if(matches){
          setImagem(ImagemDesktop);
        }
        else{
          setImagem(Topo);
        }
      }, []);

  return <div className="container">
    <header className="imagem">
      <img src={Imagem} alt="ImagemTop" />
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

      <div className="inputContainerPassword">
        <label htmlFor="password">Password</label>
        <img src={Eye} alt="olho" />
        <input type="password" name="password" id="password" placeholder='********' />
      </div>


      <input type="checkbox" className="checkbox" name="checkbox" id="checkbox" />
      <label htmlFor="checkbox">Remember me</label>
      <a href="">Forgot password?</a>


      <button type="submit" className="buttonLogin">
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
        Google
      </button>
    </form>
  </div>
}
