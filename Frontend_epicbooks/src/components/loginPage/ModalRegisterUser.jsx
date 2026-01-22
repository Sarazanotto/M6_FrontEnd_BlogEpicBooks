import React from 'react'
import SignUpForm from './SignUpForm';
import { Dialog } from 'primereact/dialog';      


const ModalRegisterUser = ({visible,onHide}) => {



    return (
        
            <Dialog className='m-5' header="Registrati" visible={visible}  onHide={onHide }>
               <SignUpForm/>
             
            </Dialog>
            
 
  
    )
}

export default ModalRegisterUser
