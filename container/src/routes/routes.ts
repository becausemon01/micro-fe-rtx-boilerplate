import React, { lazy } from 'react'

const Page = React.lazy(() => import('@/pages/index'))
const Test = React.lazy(() => import('@/pages/test'))
const Login = React.lazy(() => import('@/pages/index'))

const routes: any[] = [
	{
		path: '*',
		component: Page,
	},
	{
		path: '/test/*',
		component: Test,
	},
	{
		path: '/test/:id',
		component: lazy(() => import('@/pages/testId')),
	},
	{
		path: '/login',
		component: Login,
	},
]

export default routes
