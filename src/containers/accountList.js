import React from 'react';
import { useLocation } from "react-router-dom";
import { parse } from 'query-string'

const AccountList = props => {
  console.log('props : ', props);
  
  const queryString = parse(useLocation().search);
  console.log('queryString : ', queryString);
  
  return (
    <div>
      AccountList : {props.source}
    </div>
  )
}

export default AccountList
