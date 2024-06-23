import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const { isAuth } = useAuth()
	let navigate = useNavigate()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname !== '/' ? (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<FaArrowLeftLong />
						</button>
					) : (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<CgProfile color='white' />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
