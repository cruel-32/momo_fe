import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { LOGIN, INPUT_ACCOUNT } from 'store/actions/account'
import {
  Link
} from "react-router-dom";

const AccountDetail = props => {
  console.log('props : ', props);
  console.log('props.match : ', props.match);
  console.log('props.location : ', props.location);
  return (
    <div>
      AccountDetail
    </div>
  )
}

export default AccountDetail
