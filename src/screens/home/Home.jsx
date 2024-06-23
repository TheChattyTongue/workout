import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/button/Button'
import styles from './Home.module.scss'
import { useAuth } from '../../hooks/useAuth'
import Statistics from '../profile/statistics/Statistics'

const Home = () => {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/public/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>

			<h1 className={styles.heading}>Exercises for the shoulders</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
