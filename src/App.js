import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//import '../public/images/home-phones-2x.png'
import { LoginSection } from './components/LoginSection';
import { LoginImageSection } from './components/LoginImageSection';

function App() {
  
var username = "Joseph";
  

  return (
    <>
      <div className="row" style={{marginRight:'0px',marginLeft:'0px'}}>
        <LoginImageSection></LoginImageSection>
        <LoginSection username={username}></LoginSection>
      </div>
      <div className="row" style={{marginRight:'0px',marginLeft:'0px', marginBottom:'10px'}}>
        <div className='col-md-12 text-center'>
          <small className='mar-right'>Meta</small>
          <small className='mar-right'>About</small>
          <small className='mar-right'>Blog</small>
          <small className='mar-right'>Jobs</small>
          <small className='mar-right'>Help</small>
          <small className='mar-right'>API</small>
          <small className='mar-right'>Privacy</small>
          <small className='mar-right'>Terms</small>
          <small className='mar-right'>Location</small>
          <small className='mar-right'>Instagram Lite</small>
          <small className='mar-right'>Threads</small>
          <small className='mar-right'>Contact Uploading & Non-Users</small>
          <small className='colorgray'>Meta Verified</small>
        </div>
      </div>

      <div className="row" style={{marginRight:'0px',marginLeft:'0px', marginBottom:'30px'}}>
        <div className='col-md-12 text-center'>
          <small className='mar-right'>English</small>
          <small className='colorgray'>© 2023 Instagram from Meta</small>
        </div>
      </div>
    </>
    
  );
}

export default App;
