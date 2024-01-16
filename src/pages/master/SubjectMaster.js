import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import RegistButton from '../../components/RegistButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const SubjectMaster = () => {
	const [subject, setSubject] = useState('')

	const rows = [
		{
			name: 'HTML'
		},
		{
			name: 'CSS'
		},
		{
			name: 'JavaScript'
		},
		{
			name: 'PHP'
		}
	]

	return (
		<Box sx={{ width: '100%', pr: 30, backgroundColor: '#F3F6F999' }}>
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

					<RegistButton sx={{ width: 150, height: '40px' }}>
						登録
					</RegistButton>
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
								</TableRow>
							</TableHead>

							<TableBody>
								{rows.map((row, index) => (
									<TableRow
										key={row.name}
										sx={{
											'&:last-child td, &:last-child th':
												{ border: 0 }
										}}
									>
										<TableCell component='th' scope='row'>
											{index + 1}
										</TableCell>
										<TableCell>{row.name}</TableCell>
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
