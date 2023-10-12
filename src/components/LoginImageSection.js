import React,{Component} from 'react';
import Image from 'react-bootstrap/Image';
import img1 from '../images/screenshot1-2x.png'
import img2 from '../images/screenshot2-2x.png'
import img3 from '../images/screenshot3-2x.png'
import img4 from '../images/screenshot4-2x.png'
import { useState, useEffect } from "react";

export function LoginImageSection() {
    const [currentImage, setCurrentImage] = useState(img1);
    const images = [img1, img2, img3, img4];
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])

    var imageStyle = {
        width:'259.32px',
        height:'543.15px',
        marginLeft:'131px',
        marginRight:'30px',
        marginBottom:'42px'
    }

    return(
        <>
        <div className='col-md-2'></div>
        <div className='col-md-4 bodyStyle'>
            <Image src={currentImage} rounded style={imageStyle}/>
        </div>
        </>
        
    )
}