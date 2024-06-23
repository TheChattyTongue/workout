import { useForm } from 'react-hook-form'
import Layout from '../../components/layout/Layout'
import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'
import Loader from '../../components/ui/Loader'
import { useEffect, useState } from 'react'
import styles from './Auth.module.scss'
import { useMutation } from 'react-query'

import { useNavigate } from 'react-router-dom'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { errors, handleSubmit, register, isLoading, setType, onSubmit } =
		useAuthPage()

	return (
		<>
			<Layout heading='Sign In' bgImage='/public/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Please Enter A Valid Email!'
							}
						}}
						type='text'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign In</Button>
						<Button clickHandler={() => setType('register')}>Sign Un</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
