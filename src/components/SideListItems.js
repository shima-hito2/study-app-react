import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const AdminMode = () => {
	return (
		<>
			<ListItemButton sx={{ pr: 8 }} component={Link} to='/admin/subject'>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary='科目マスタ' />
			</ListItemButton>
			<ListItemButton sx={{ pr: 8 }} component={Link} to='/admin/task'>
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary='課題登録' />
			</ListItemButton>
		</>
	)
}

const UserMode = () => {
	const [rows, setRows] = useState([])

	const setSubjectList = async () => {
		const res = await fetch('http://localhost:8888/getSubjectAll')
		const data = await res.json()
		setRows(data)
	}

	useEffect(() => {
		;(async () => {
			await setSubjectList()
		})()
	}, [])
	return (
		<>
			{rows.map(row => (
				<ListItemButton
					sx={{ pr: 8 }}
					component={Link}
					to={`/task/${row.id}`}
					key={row.id}
				>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary={row.name} />
				</ListItemButton>
			))}
		</>
	)
}

const MainListItems = () => {
	const pathname = useLocation().pathname
	const isAdmin = pathname.indexOf('admin') === 1
	return (
		<React.Fragment>
			{isAdmin ? <AdminMode /> : <UserMode />}
		</React.Fragment>
	)
}

export default MainListItems
