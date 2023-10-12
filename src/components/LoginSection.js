import React,{Component} from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

export function LoginSection() {

    var imageStyle = {
    }

    return(
        <div className='col-md-4'>
            <div style={{border:'1px solid #dbdbdb',padding:'20px',margin:'50px 0px', display:'flex', justifyContent:'center'}} className=''>
               
               <div className='row'>
                <div className='col-md-12'>
                    <Image src='../images/ajlEU-wEDyo.png' rounded style={imageStyle}/>
                </div>
                <div className='col-md-12 mt-3'>
                    <Form.Control type="text" placeholder="Phone Number or Email" />
                </div>
               </div>
                            
            </div>

            
        </div>
    )
}