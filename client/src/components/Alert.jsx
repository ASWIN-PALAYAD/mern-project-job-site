import React from 'react'
import { useAppContext } from '../constext/appContext'

const Alert = () => {
    const {alertType, alertText} = useAppContext();
  return (
    <div className={`alert alert-${alertType}`} >
        {alertText} 
    </div>
  )
}

export default Alert