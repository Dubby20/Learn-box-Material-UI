import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import List from 'material-ui/svg-icons/action/list'

const Menu = ({ toggle }) => (
	<div>
		<IconMenu
			onClick={() => toggle}
			iconButtonElement={
				<IconButton>
					<List />
				</IconButton>
			}
			anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
			targetOrigin={{ horizontal: 'left', vertical: 'top' }}
		>
			<MenuItem primaryText="Classroom" />
			<MenuItem primaryText="Practice Tests" />
			<MenuItem primaryText="Library" />
			<MenuItem primaryText="Guidance and Counselling" />
		</IconMenu>
	</div>
)

export default Menu
