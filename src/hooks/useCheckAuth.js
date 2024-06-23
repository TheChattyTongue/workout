import Cookies from 'js-cookie'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from './useAuth'
import { TOKEN } from '../app.constants'

export const useCheckAuth = () => {
	const { pathname } = useLocation()
	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) {
			setIsAuth(false)
		}
	}, [pathname, isAuth])
}
