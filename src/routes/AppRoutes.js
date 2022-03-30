import React from 'react'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import UserProfile from '../components/Profile/UserProfile'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage'
import { authContext } from '../store/authContext'
import AuthPage from '../pages/AuthPage'
import RoutesProfile from '../components/routesProfile/PrivateRoute'
import PrivateRoute from '../components/routesProfile/PrivateRoute'
const AppRoutes = () => {
	const authCtx = useContext(authContext)

	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>

				<PrivateRoute
					component={<AuthPage />}
					path={'/auth'}
					when={!authCtx.isLoggedIn}
					to={'/'}
				/>

				<PrivateRoute
					component={<UserProfile />}
					path={'/profile'}
					when={authCtx.isLoggedIn}
					to={'/auth'}
				/>

				<Route path={'*'}>
					<Redirect to={'/'} />
				</Route>
			</Switch>
		</Layout>
	)
}

export default AppRoutes
