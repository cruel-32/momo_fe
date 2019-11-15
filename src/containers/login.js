import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { LOGIN, INPUT_ACCOUNT } from 'store/actions/account'

const LoginPage = props => {
  useEffect(()=>{
    console.log('effect : 브라우저가 모두 그려지면 수행 ')
    return ()=>{
      console.log('effect!! end')
    }
  },[props.source]); //props.source 값이 변경될 떄만 구도이 재생성

  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  
  const { email, password } = useSelector(store => store.account, [])

  const countUp = e => {
    setCount(count+1);
  }

  const countDown = e => {
    setCount(count-1);
  }

  const inputAccount = e => {
    const { target } = e;

    dispatch({ type: INPUT_ACCOUNT, payload:{
      [target.name] : [target.value]
    }})
  }

  const handleLogin = e => {
    dispatch({ type: LOGIN, payload:{
      email: 'test',
      password: '11111',
    }})
  }

  return (
    <div>
      <div>
        <div>
          state : {count}
        </div>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
      </div>
      
      <div>
        <div>
          store props
        </div>
        <div>
          email : {email}
        </div>
        <div>
          password : {password}
        </div>
        <input type="text" name="email" value={email} onChange={inputAccount} ></input>
        <input type="password" name="password" value={password} onChange={inputAccount}></input>
        <button onClick={handleLogin}>login</button>
      </div>

      <div>
        props : {props.source}
      </div>
    </div>
  )
}

export default LoginPage
