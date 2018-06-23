import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'


const ListItem = List.Item
class Login extends Component {
    goRegister=() =>{
        this.props.history.replace('/register')
    }

    render () {
        return (
            <div>
                <NavBar>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <whiteSpace />
                        <InputItem placeholder="请输入用户名">用户名:</InputItem>
                        <whiteSpace />
                        <InputItem type="password" placeholder="请输入密码">密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <whiteSpace />
                        <Button type="primary">登&nbsp;&nbsp;&nbsp;陆</Button>
                        <whiteSpace />
                        <Button onClick={this.goRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect()(Login)