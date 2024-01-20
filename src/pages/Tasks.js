import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Tasks = () => {
	const params = useParams()
	const subjectId = params.subjectId

	useEffect(() => {
		;(async () => {
			const formData = new FormData()
			formData.append('id', subjectId)
			const res = await fetch(
				`http://localhost:8888/getSubjectById?id=${subjectId}`
			)
			const data = await res.json()
			console.log(data)
		})()
	}, [subjectId])

	return (
		<Box
			sx={{
				width: '100%',
				pr: 30,
				backgroundColor: '#F3F6F999',
				position: 'relative'
			}}
		>
			task{subjectId}
		</Box>
	)
}

export default Tasks
