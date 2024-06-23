import { useQuery } from 'react-query'
import UserService from '../../services/user.service'

export const useProfile = () => {
	return useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data
	})
}
