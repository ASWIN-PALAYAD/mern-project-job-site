import React from 'react';
import { useState,useEffect } from 'react';
import {Logo,FormRow,Alert} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../constext/appContext';
import {useNavigate} from 'react-router-dom';


const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
}


const Register = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState(initialState)
  const {user,isLoading,showAlert,displayAlert,setupUser} = useAppContext();



  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember});
  }

  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values;
    if(!email || !password || (!isMember && !name)){
      displayAlert()
      return
    }
    const currentUser = {name,email,password}
    if(isMember){
      // loginUser(currentUser) import login user
      //2nd meth
      setupUser({currentUser,endPoint:'login',alertText:'login success... redirecting'})
    }else{
      // registerUser(currentUser) import it register
      //2nd
      setupUser({currentUser,endPoint:'register',alertText:'user created..redirecting'})
    }

  }

  useEffect(()=> {
    if(user){
      setTimeout(()=>{
        navigate('/')
        // toggleMember()
      },3000)
    }
  },[user,navigate])

  return (
    <Wrapper className='full-page' >
      <form className='form' onSubmit={onSubmit} >
        <Logo/>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert/>}
        {/* name input */}
        {!values.isMember && (
            <FormRow type={'text'} name='name' value={values.name} handleChange={handleChange} />
        )}
        <FormRow type={'email'} name='email' value={values.email} handleChange={handleChange} />
        <FormRow type={'password'} name='password' value={values.password} handleChange={handleChange} />

        <button type='submit' className='btn btn-block' disabled={isLoading} >submit</button>

        <button type='button' className='btn btn-block btn-hipster' disabled={isLoading}
            onClick={()=> {
              setupUser({
                currentUser:{email:'sherin@gmail.com',password:'sherin'},
                endPoint : 'login',
                alertText:'login Successful..! Redirecting'
              })
            }}
        >
          {isLoading? 'loading' : 'Demo App'} 
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register