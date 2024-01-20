import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import RegistButton from '../../../components/RegistButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Loading from '../../../components/Loading'

const SubjectMaster = () => {
	const [subject, setSubject] = useState('')
	const [rows, setRows] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const form = document.getElementById('SubjectMasterForm')

	useEffect(() => {
		;(async () => {
			await setSubjectList()
		})()
	}, [])

	const setSubjectList = async () => {
		setIsLoading(true)
		const res = await fetch('http://localhost:8888/getSubjectAll')
		const data = await res.json()
		setRows(data)
		setIsLoading(false)
		return res.status === 200
	}

	const handleRegist = async () => {
		if (!subject) return
		const formData = new FormData(form)
		const action = form.getAttribute('action')
		const options = {
			method: 'POST',
			body: formData
		}
		await fetch(action, options)

		await setSubjectList()
		setSubject('')
		alert('登録しました。')
	}

	const handleDelete = async argId => {
		const formData = new FormData()
		formData.append('id', argId)
		const options = {
			method: 'POST',
			body: formData
		}
		await fetch('http://localhost:8888/deleteSubject', options)
		await setSubjectList()
	}

	return (
		<Box
			sx={{
				width: '100%',
				pr: 30,
				backgroundColor: '#F3F6F999',
				position: 'relative'
			}}
		>
			{isLoading ? <Loading /> : ''}
			<Box sx={{ mx: 4, my: 4 }}>
				<Box fontSize='h4.fontSize' fontStyle='normal'>
					科目マスタ設定画面
				</Box>

				<Box
					sx={{
						display: 'flex',
						mt: 2,
						justifyContent: 'space-between'
					}}
				>
					<Box sx={{ width: '300px' }}>
						<TextField
							id=''
							label='科目名'
							value={subject}
							size='small'
							fullWidth
							sx={{ backgroundColor: '#fff' }}
							onChange={e => {
								setSubject(e.target.value)
							}}
						/>
					</Box>

					<form
						id='SubjectMasterForm'
						method='POST'
						action='http://localhost:8888/registSubject'
					>
						<input
							type='text'
							name='name'
							value={subject}
							readOnly
							style={{ display: 'none' }}
						/>
						<RegistButton
							sx={{ width: 150, height: '40px' }}
							onClick={handleRegist}
							color='primary'
						>
							登録
						</RegistButton>
					</form>
				</Box>

				<Box sx={{ m: 2 }} />

				<Box>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell sx={{ width: '10%' }}>
										#
									</TableCell>
									<TableCell>科目名</TableCell>
									<TableCell sx={{ width: '10%' }} />
								</TableRow>
							</TableHead>

							<TableBody>
								{rows.map((row, idx) => (
									<TableRow
										key={row.id}
										sx={{
											'&:last-child td, &:last-child th':
												{ border: 0 }
										}}
									>
										<TableCell component='th' scope='row'>
											{idx + 1}
										</TableCell>
										<TableCell>{row.name}</TableCell>
										<TableCell>
											<Button
												variant='contained'
												color='error'
												size='small'
												onClick={() => {
													handleDelete(row.id)
												}}
											>
												削除
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</Box>
	)
}

export default SubjectMaster
