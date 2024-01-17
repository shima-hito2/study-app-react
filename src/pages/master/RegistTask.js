import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from '@mui/material'
import React, { useState } from 'react'
import RegistButton from '../../components/RegistButton'

const RegistTask = () => {
	const [subject, setSubject] = useState('')
	const [title, setTitle] = useState('')
	const [code, setCode] = useState('')
	const [detail, setDetail] = useState('')

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
					課題登録画面
				</Box>

				<Box
					sx={{
						display: 'flex',
						mt: 2,
						justifyContent: 'space-between'
					}}
				>
					<Box sx={{ mt: 2, width: '300px' }}>
						<FormControl fullWidth size='small' sx={{ mt: -2 }}>
							<InputLabel id='demo-select-small-label'>
								課題選択
							</InputLabel>
							<Select
								labelId='demo-select-small-label'
								id='demo-select-small'
								value={subject}
								label='課題選択'
								sx={{ backgroundColor: '#fff' }}
								onChange={e => {
									setSubject(e.target.value)
								}}
							>
								{rows.map((row, index) => (
									<MenuItem value={index} key={row.name}>
										{row.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					<RegistButton sx={{ width: 150, height: '40px' }}>
						登録
					</RegistButton>
				</Box>

				<Box sx={{ m: 2 }} />

				<Box sx={{ display: 'flex', mt: 2 }}>
					<Box sx={{ width: '500px' }}>
						<TextField
							id=''
							label='題名'
							value={title}
							size='small'
							fullWidth
							sx={{ backgroundColor: '#fff' }}
							onChange={e => {
								setTitle(e.target.value)
							}}
						/>
					</Box>

					<Box sx={{ m: 2 }} />
				</Box>

				<Box sx={{ m: 2 }} />

				<Box sx={{ width: '100%' }}>
					<TextField
						id=''
						label='説明'
						multiline
						value={detail}
						size='small'
						rows={10}
						fullWidth
						sx={{ backgroundColor: '#fff' }}
						onChange={e => {
							setDetail(e.target.value)
						}}
					/>

					<Box sx={{ m: 2 }} />

					<TextField
						id=''
						label='コード'
						multiline
						value={code}
						size='small'
						rows={10}
						fullWidth
						sx={{ backgroundColor: '#fff' }}
						onChange={e => {
							setCode(e.target.value)
						}}
					/>
					<Box
						sx={{
							width: '100%',
							border: 'solid 1px #00000050',
							minHeight: '100px',
							mt: 2
						}}
						dangerouslySetInnerHTML={{ __html: code }}
					/>
				</Box>
				<Box sx={{ m: 2 }} />
			</Box>
		</Box>
	)
}

export default RegistTask
