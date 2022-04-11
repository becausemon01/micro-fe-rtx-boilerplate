import React, { lazy } from 'react'

const Page = React.lazy(() => import('@/pages/index'))
const Login = React.lazy(() => import('@/pages/index'))

const routes: any[] = [
	{
		path: '*',
		component: Page,
	},
	{
		path: '/login',
		component: Login,
	},
]

export default routes
