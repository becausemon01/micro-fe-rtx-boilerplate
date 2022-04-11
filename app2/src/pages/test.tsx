import React from 'react'
import { Link } from 'react-router-dom'

const Page: React.FC = () => {
	return (
		<div>
			Admin center
			<Link to={'/test/3'}> id</Link>
		</div>
	)
}

export default Page
