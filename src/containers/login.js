import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { LOGIN, INPUT_ACCOUNT } from 'store/actions/account'
import { Link, } from "react-router-dom";

const LoginPage = props => {
  
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
  
  useEffect(()=>{
    console.log('effect : 브라우저가 모두 그려지면 수행 ')
    return ()=>{
      console.log('effect!! end')
    }
  // },[]); //구독을 재생성하지 않으므로 렌더링을 1회만 할때 빈 []를 두번째 인자로 넘긴다
  }, [props.source]); //props.source 값이 변경될 떄만 구독이 재생성

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
      
      <Link to="/sub1">sub1</Link>

    </div>
  )
}

export default LoginPage
