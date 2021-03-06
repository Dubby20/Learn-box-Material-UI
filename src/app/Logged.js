import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const Logged = ({ toggle }) => (
	<IconMenu
		onClick={() => toggle}
		iconButtonElement={
			<IconButton>
				<MoreVertIcon />
			</IconButton>
		}
		targetOrigin={{ horizontal: 'right', vertical: 'top' }}
		anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
	>
		<MenuItem primaryText="Refresh" />
		<MenuItem primaryText="Help" />
		<MenuItem primaryText="Send feedback" />
		<MenuItem primaryText="Sign out" />
	</IconMenu>
)

export default Logged
