import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
//import '../public/images/home-phones-2x.png'
import Image from 'react-bootstrap/Image';
import img1 from './images/screenshot1-2x.png'
import img2 from './images/screenshot2-2x.png'
import img3 from './images/screenshot3-2x.png'
import img4 from './images/screenshot4-2x.png'

function App() {
  const [currentImage, setCurrentImage] = useState(img1);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000)
    
    return () => clearInterval(intervalId);
}, [])

  var bodyStyle = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundImage : 'url("../images/home-phones-2x.png")',
    backgroundSize:'468.32px 634.15px',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height:'693px'
  }

  var imageStyle = {
    width:'259.32px',
    height:'543.15px',
    marginLeft:'131px',
    marginRight:'30px',
    marginBottom:'42px'
  }
  return (
    <div className="row" style={{marginRight:'0px',marginLeft:'0px'}}>
      <div className='col-md-2'></div>
      <div className='col-md-4' style={bodyStyle}>
      <Image src={currentImage} rounded style={imageStyle}/>
        </div>
      <div className='col-md-6'>fdfdfdf</div>
    </div>
  );
}

export default App;
