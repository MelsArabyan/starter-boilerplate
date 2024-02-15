import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { connect } from 'react-redux';
import { deleteUser, getUsersData } from 'redux/actions/Users';
import jsonplaceholderService from '../../../../services/JsonplaceholderService';



export class UserList extends Component {

	componentDidMount = () => {
		jsonplaceholderService.getUsers()
		.then((users => {
			this.props.getUsersData(users)
		}))
		
	}

	state = {
		userProfileVisible: false,
		selectedUser: null
	}

	deleteUser = userId => {
		
		this.props.deleteUser(userId)
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const users = this.props.usersData
		const {userProfileVisible, selectedUser } = this.state;
		

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus name={record.name} subTitle={record.email} id = {record.id}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => a.username.localeCompare(b.username),
				},
			},
			{
				title: 'City',
				dataIndex: 'address',
				render: address => (
					<div >{address.city}</div>
				),
				sorter: {
					compare: (a, b) => a.address.city.localeCompare(b.address.city),
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: company => (
					<div >{company.name}</div>
				),
				sorter: {
					compare: (a, b) => a.address.city.localeCompare(b.address.city),
					// (a, b) => a.username.length - b.username.length,
				},
			},
			
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

const mapStateToProps = ({users}) => {
	const {loading, usersData} = users;
  	return {loading, usersData}
}

const mapDispatchToProps = {
	getUsersData,
	deleteUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)

// export default UserList
