import * as actionTypes from './actionsTypes'
import axios from 'axios'

export const authStart = () =>{
    return {
        type :actionTypes.AUTH_START
    }
}


export const authSuccess = (tokenId) =>{
    return {
        type :actionTypes.AUTH_SUCCESS,
        token : tokenId 
    }
}

export const authFail = (error) =>{
    return {
        type :actionTypes.AUTH_FAIL,
        error : error
    }
}

export const auth = (user_name,pwd) =>{
    return dispatch =>{
        dispatch(authStart());
      var postData = 
      JSON.stringify({
        username: user_name,
        password: pwd,
      })
    
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    };

    axios
      .post("https://mis2020.herokuapp.com/rest-auth/login/",postData,axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res.data.key);
        dispatch(authSuccess(res.data.key));
        
      })
      .catch((err) => {
        dispatch(authFail(err));
      })

    }
}