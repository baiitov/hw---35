import { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { authContext } from '../../store/authContext'
import { SECRET_KEY } from '../../utils/constans/general'
import classes from './ProfileForm.module.css'

const ProfileForm = () => {
	const newPasswordInputRef = useRef()
	const authCtx = useContext(authContext)
  const history = useHistory()

	const submitHandler = (event) => {
		event.preventDefault()
    const enteredNewPassword = newPasswordInputRef.current.value;
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${SECRET_KEY}`,{
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) =>{
      console.log(response);
      history.replace('/')
    })
    .catch((error)=>{}) 
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input type='password' id='new-password' minLength={7} ref={newPasswordInputRef} />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	)
}

export default ProfileForm
