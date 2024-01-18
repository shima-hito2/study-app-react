import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'

const MainListItems = () => {
	return (
		<React.Fragment>
			<ListItemButton sx={{ pr: 8 }} component={Link} to='/admin/subject'>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary='科目マスタ' />
			</ListItemButton>
			<ListItemButton sx={{ pr: 8 }} component={Link} to='/admin/regist'>
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary='課題登録' />
			</ListItemButton>
		</React.Fragment>
	)
}

export default MainListItems
