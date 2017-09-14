/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import FontIcon from 'material-ui/FontIcon'
import Search from 'material-ui/svg-icons/action/search'
import List from 'material-ui/svg-icons/action/list'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import Dialog from 'material-ui/Dialog'
import { deepOrange500 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import { GridList, GridTile } from 'material-ui/GridList'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import img from '../images/classroom.jpg'
import { Input } from 'reactstrap'
import Logged from './Logged'
import Menu from './Menu'

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 200,
	},

	gridList: {
		height: '500px !important',
	},
}

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500,
	},
})

class Main extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			open: false,
			search: false,
			logged: true,
			menu: false,
		}
	}

	handleSearch() {
		this.setState({
			search: !this.state.search,
		})
	}

	handleIconMenu() {
		this.setState({
			logged: !this.state.logged,
		})
	}

	handleMainMenu() {
		this.setState({
			menu: !this.state.menu,
		})
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar
						iconElementLeft={
							<div>
								<Menu toggle={() => this.handleMainMenu()} />
							</div>
						}
						title="My School"
						iconElementRight={
							<div>
								{this.state.search ? <Input /> : ''}
								<IconButton>
									<Search onClick={() => this.handleSearch()} />
								</IconButton>
								<IconButton>
									{this.state.logged ? (
										<Logged toggle={this.handleIconMenu} />
									) : (
										''
									)}
									>
								</IconButton>
							</div>
						}
					/>
					<GridList style={styles.gridList}>
						<GridTile
							subtitle={
								<span>
									<b>Classroom</b>
								</span>
							}
							actionIcon={
								<IconButton>
									<StarBorder color="white" />
								</IconButton>
							}
						>
							<Card style={{ marginTop: '10px', height: '150px' }}>
								<CardMedia
									overlay={
										<CardTitle
											title="Overlay title"
											subtitle="Overlay subtitle"
										/>
									}
								>
									<img src={img} alt="" />
								</CardMedia>
								<CardTitle title="Card title" subtitle="Card subtitle" />
								<CardText>Classroom</CardText>
								<CardActions>
									<FlatButton label="Action1" />
									<FlatButton label="Action2" />
								</CardActions>
							</Card>
						</GridTile>

						<GridTile>
							<Card style={{ marginTop: '10px', height: '150px' }}>
								<CardMedia
									overlay={
										<CardTitle
											title="Overlay title"
											subtitle="Overlay subtitle"
										/>
									}
								>
									<img src={img} alt="" />
								</CardMedia>
								<CardTitle title="Card title" subtitle="Card subtitle" />
								<CardText>Tests</CardText>
								<CardActions>
									<FlatButton label="Action1" />
									<FlatButton label="Action2" />
								</CardActions>
							</Card>
						</GridTile>

						<GridTile>
							<Card style={{ marginTop: '10px', height: '150px' }}>
								<CardMedia
									overlay={
										<CardTitle
											title="Overlay title"
											subtitle="Overlay subtitle"
										/>
									}
								>
									<img src={img} alt="" />
								</CardMedia>
								<CardTitle title="Card title" subtitle="Card subtitle" />
								<CardText>Tests</CardText>
								<CardActions>
									<FlatButton label="Action1" />
									<FlatButton label="Action2" />
								</CardActions>
							</Card>
						</GridTile>

						<GridTile>
							<Card style={{ marginTop: '10px', height: '150px' }}>
								<CardMedia
									overlay={
										<CardTitle
											title="Overlay title"
											subtitle="Overlay subtitle"
										/>
									}
								>
									<img src={img} alt="" />
								</CardMedia>
								<CardTitle title="Card title" subtitle="Card subtitle" />
								<CardText>Tests</CardText>
								<CardActions>
									<FlatButton label="Action1" />
									<FlatButton label="Action2" />
								</CardActions>
							</Card>
						</GridTile>
					</GridList>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default Main
