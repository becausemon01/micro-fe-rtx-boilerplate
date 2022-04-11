import React from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Page: React.FC = () => {
	// const history = useHistory()
	return (
		<div>
			Admin center
			{/* <button
				onClick={() => {
					history.push('/a')
				}}
			>
				aaaa
			</button> */}
			<Link to='/test'>ttt</Link>
		</div>
	)
}

export default Page
