import logo from './logo.svg';
import './App.css';
//import '../public/images/home-phones-2x.png'
import Image from 'react-bootstrap/Image';
import { LoginSection } from './components/LoginSection';
import { LoginImageSection } from './components/LoginImageSection';

function App() {
  

  

  return (
    <div className="row" style={{marginRight:'0px',marginLeft:'0px'}}>
      <LoginImageSection></LoginImageSection>
      <LoginSection></LoginSection>
    </div>
  );
}

export default App;
