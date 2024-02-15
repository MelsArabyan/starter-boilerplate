import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { connect } from 'react-redux';

export class EditProfile extends Component {

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {
		console.log(this.props)
		const onFinish = values => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				this.setState({
					name: values.name,
					email: values.email,
					userName: values.username,
					phoneNumber: values.phone,
					website: values.website,
					city: values.city,
					postcode: values.zipcode,
				})

				message.success({ content: 'Done!', key, duration: 2 });
				this.props.history.push(this.props.match.path.split("/").slice(0, -2).join("/")+'/all')
			}, 1000);
		};
	
		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		const { id, name, username, email, 
			address, phone, website, company,} = this.props.usersData.find((user)=> {
				return(user.id == this.props.userId)
			});

		return (
			<>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{ 
								'name': name,
								'email': email,
								'username': username,
								'phoneNumber': phone,
								'website': website,
								'city': address.city,
								'postcode': address.zipcode
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									{/* <Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Date of Birth"
											name="dateOfBirth"
										>
											<DatePicker className="w-100"/>
										</Form.Item>
									</Col> */}
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phoneNumber"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									{/* <Col xs={24} sm={24} md={24}>
										<Form.Item
											label="Address"
											name="address"
										>
											<Input />
										</Form.Item>
									</Col> */}
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({users}) => {
	console.log(users, 'users')
	const {loading, usersData} = users;
  	return {loading, usersData}
}

// export default EditProfile
export default  connect(mapStateToProps)(EditProfile) 
