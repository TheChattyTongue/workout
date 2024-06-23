import styles from './Profile.module.scss'
import { useProfile } from './useProfile'
import stylesLayout from '../../components/layout/Layout.module.scss'
import cn from 'clsx'
import Header from '../../components/layout/header/Header'
import Loader from '../../components/ui/Loader'
import Statistics from './statistics/Statistics'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/public/images/header/user.svg'
								alt='Profile'
								height='56'
								draggable='false'
							/>
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>

				<Statistics />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img src={image} alt='' />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
