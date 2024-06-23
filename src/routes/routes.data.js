import Auth from '../screens/auth/Auth'
import Home from '../screens/home/Home'
import NewExercise from '../screens/new-exercise/NewExercise'
import NewWorkout from '../screens/new-workout/NewWorkout'
import Profile from '../screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: true
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		auth: true
	}
]
