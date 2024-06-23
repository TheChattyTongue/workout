import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes.data'
import NotFound from '../screens/not-found/NotFound'
import Home from '../screens/home/Home'
import { useAuth } from '../hooks/useAuth'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (!isAuth && route.auth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
