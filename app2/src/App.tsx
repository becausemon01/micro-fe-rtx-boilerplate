import React, { Fragment } from 'react'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import PrivateRoute from '@/routes/PrivateRoute'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/login'

const App: React.FC = () => {
	return (
		<Fragment>
			<Routes>
				<Route
					path='*'
					element={
						<PrivateRoute>
							<ProtectedRoutes />
						</PrivateRoute>
					}
				/>
				<Route path='/login' element={<Login />} />
			</Routes>
		</Fragment>
	)
}

export default App
