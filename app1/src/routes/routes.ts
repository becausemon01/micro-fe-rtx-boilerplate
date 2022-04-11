import React from 'react'

const Test = React.lazy(() => import('@/pages/test'))
const Login = React.lazy(() => import('@/pages/index'))

const routes: any[] = [
	{
		path: '/app1/*',
		component: Test,
	},
	{
		path: '/login',
		component: Login,
	},
]

export default routes
