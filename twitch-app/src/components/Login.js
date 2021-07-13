import React, {Component} from 'react'
import {Button, Form, Input, message, Modal} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {login} from '../utils'

class Login extends Component {
    state = {
        displayModel: false
    }

    render() {
        const {displayModel} = this.state

        return (
            <div>
                <Button shape="round" onClick={this.signinOnClick} style={{marginRight: 20}}>
                    Login
                </Button>
                <Modal title="Log In" visible={displayModel} onCancel={this.handleCancel} footer={null}>
                    <Form
                        name="normal_login"
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

    signinOnClick = () => {
        this.setState({displayModel: true})
    }

    handleCancel = () => {
        this.setState({displayModel: false})
    }

    onFinish = (value) => {
        login(value).then(data => {
            this.setState({displayModel: false})
            message.success(`Welcome back, ${data.name}`)
            this.props.onSuccess()
        }).catch(err => {
            message.error(err.message)
        })
    }
}

export default Login  