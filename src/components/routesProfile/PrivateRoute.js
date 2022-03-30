import React from 'react'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { authContext } from '../../store/authContext'

const PrivateRoute = ({path, when , component , to}) => {
	
	return (
		<Route
		path={path}
		render={()=>{
			return when ===true ? component : <Redirect to={to}/>
		}}
		/>
	)
}

export default PrivateRoute
