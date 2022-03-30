import { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { authContext } from '../../store/authContext'

import { SECRET_KEY } from '../../utils/constans/general'

import classes from './AuthForm.module.css'

const AuthForm = () => {
	const history = useHistory()
	const [isLogin, setIsLogin] = useState(true)
	const [isLoadin, setIsLoading] = useState(false)
	const [error , setError ] = useState(false)
	const emailInputRef = useRef()
	const passwordInputRef = useRef()
	const authCtx = useContext(authContext)
	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState)
	}
	const submitHandler = (event) => {
		event.preventDefault()
		const enteredEmail = emailInputRef.current.value
		const enteredPassword = passwordInputRef.current.value
		//todo add validation
		setIsLoading(true)
		let url
		if (isLogin) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${SECRET_KEY}`
			fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					if (response.ok) {
						return response.json()
					} else {
						response.json().then((data) => {
							let errorMessage = 'oshibka'
							if (data && data.error && data.error.message) {
								errorMessage = data.error.message
							}
							throw new Error(errorMessage)
						})
					}
				})
				.then((data) => {
					authCtx.login(data.idToken)
					history.replace('/')
				})
				.catch((error) => {
					setError('Вы неправильно ввели данные!!!')
					alert(error.message)
				})
		} else {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${SECRET_KEY}`
			fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					setIsLoading(false)
					if (response.ok) {
						return response.json()
					} else {
						response.json().then((data) => {
							let errorMessage = 'Authenticatin failed'
							if (data && data.error && data.error.message) {
								errorMessage = data.error.message
							}
							throw new Error(errorMessage)
						})
					}
				})
				.then((data) => {
					authCtx.login(data.idToken)
					history.replace('/')
				})
				.catch((err) => {
					alert(err.message)
				})
		}
	}
	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input
						ref={emailInputRef}
						type='email'
						id='email'
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						ref={passwordInputRef}
						type='password'
						id='password'
						required
					/>
				</div>
				<div className={classes.actions}>
					{!isLoadin && (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					)}
					{isLoadin && <p>sending request...</p>}
					<h3 style={{color:'red'}}>{error}</h3>

					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin
							? 'Create new account'
							: 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	)
}

export default AuthForm
