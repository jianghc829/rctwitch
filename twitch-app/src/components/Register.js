import React, {Component} from 'react'
import {Button, Form, Input, message, Modal} from "antd"
import {LockOutlined, UserOutlined} from "@ant-design/icons"
import {register} from "../utils"

class Register extends Component {
    state = {
        displayModel: false
    }

    render() {
        const {displayModel} = this.state

        return (
            <div>
                <Button shape="round" type="primary" onClick={this.signupOnClick} style={{marginRight: 20}}>
                    Register
                </Button>
                <Modal title="Register" visible={displayModel} onCancel={this.handleCancel} footer={null}>
                    <Form
                        name="normal_register"
                        onFinish={this.onFinish}
                        preserve={false}
                    >
                        <Form.Item
                            name="user_id"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="first_name"
                            rules={[{required: true, message: 'Please input your first name!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="firstname"/>
                        </Form.Item>
                        <Form.Item
                            name="last_name"
                            rules={[{required: true, message: 'Please input your last name!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="lastname"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }

    signupOnClick = () => {
        this.setState({displayModel: true})
    }

    handleCancel = () => {
        this.setState({displayModel: false})
    }

    onFinish = (value) => {
        register(value).then(data => {
            this.setState({displayModel: false})
            message.success('Register succeed')
        }).catch(err => {
            message.error(err.message)
        })
    }
}

export default Register