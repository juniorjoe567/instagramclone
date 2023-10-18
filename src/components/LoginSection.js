import React from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';

export function LoginSection(props) {
    return(
        <div className='col-md-4'>
            <div style={{border:'1px solid #dbdbdb',padding:'20px',margin:'40px 40px 0px 0px', display:'flex', justifyContent:'center'}} className=''>
               
               <div className='row'>
                <div className='col-md-12'>
                    <div className='imageStyle'></div>
                </div>
                <div className='col-md-12 mt-3 text-center d-grid gap-2'>
                    <TextField id="outlined-basic" label="Username or Phone number" variant="outlined" size="small" />
                </div>
                <div className='col-md-12 mt-3 text-center d-grid gap-2'>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size="small" />
                </div>
                <div className='col-md-12 mt-3 text-center d-grid gap-2'>
                <Button variant="primary" size="sm">
                    Small button
                </Button>
                </div>

                <div className='col-md-12 mt-3'>
                    <div className='row'>
                        <div className='col-md-5'><hr/></div>
                        <div className='col-md-2'>OR</div>
                        <div className='col-md-5'><hr/></div>
                    </div>
                </div>
                <div className='col-md-12 mt-3 text-center'>
                    <span>Login with Facebook</span>
                </div>
                <div className='col-md-12 mt-3 text-center'>
                    <small>Forgot password?</small>
                </div>
               </div>
                            
            </div>
            <div style={{border:'1px solid #dbdbdb',padding:'20px',margin:'10px 40px 0px 0px', display:'flex', justifyContent:'center'}} className=''>
               
               <div className='row'>
                
                <div className='col-md-12 text-center'>
                    <span>Don't have an account? Sign up</span>
                </div>
                
               </div>
                            
            </div>
            <div style={{margin:'10px 0px', display:'flex', justifyContent:'center'}} className=''>
               
               <div className='row'>
                
                <div className='col-md-12 text-center'>
                    <small>Get the app.</small>
                </div>
                <div className='col-md-12 mt-3'>
                    <div className='row'>
                        <div className='col-md-6' style={{textAlign:"right"}}>
                        <Image src='../images/googleplay.png' style={{width: "80%"}}/>
                        </div>
                        <div className='col-md-6'>
                        <Image src='../images/microsoft.png' style={{width: "67%"}}/>
                        </div>
                    </div>
                </div>
               </div>
                            
            </div>
        </div>
    )
}