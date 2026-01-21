import React from 'react'
import FormToRegistration from './formToRegistration';
import { Dialog } from 'primereact/dialog';      


const ModalRegisterUser = ({visible,onHide}) => {



    return (
        
            <Dialog className='m-5' header="Registrati" visible={visible}  onHide={onHide }>
               <FormToRegistration/>
             
            </Dialog>
            
 
  
    )
}

export default ModalRegisterUser
