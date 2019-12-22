import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Button, Modal } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

import { LoginForm } from 'components/LoginForm/LoginForm.js'

export const LandingPage = () => {
    const history = useHistory();
    const account = useSelector(store => store.account, [])
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(()=>{
        console.log('effect : 브라우저가 모두 그려지면 수행 ')
        if(account.email){
          console.log('go back : ', history)
          history.push('/')
        }
        return ()=>{
          console.log('effect!! end')
        }
    }, [account, history])

    return (
        <div>
            <div>
                (대충 모모에 와서 환영한다는 인사)
            </div>

            <div>
                <Button onClick={()=>{setIsOpen(true)}}>Login</Button>
            </div>

            <Modal
                open={isOpen}
                onClose={e=>{setIsOpen(false)}}
            >
                <div className="modal modal--pos-center">
                    <LoginForm></LoginForm>
                </div>
            </Modal>

        </div>
    )
}