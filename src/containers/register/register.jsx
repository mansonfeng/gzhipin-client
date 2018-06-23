import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, WingBlank, List, WhiteSpace, InputItem, Radio, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'


const ListItem = List.Item
class Register extends Component {
    state ={
        username:'',
        password :'',
        password2:'',
        type:'dashen'
    }

    handleChanged = (name, value) =>{
        this.setState({
            [name]:value
        })
    }

    register =() =>{
        console.log(this.state)
    }
    goLogin =() =>{
        this.props.history.replace('/login')
    }

    render() {
        const {type} = this.state
        return (
            <div>
                <NavBar>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={val =>{this.handleChanged('username',val)}}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" placeholder="请输入密码" onChange={val =>{this.handleChanged('password',val)}}>密&nbsp;&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" placeholder="确认密码" onChange={val =>{this.handleChanged('password2',val)}}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => this.handleChanged('type','dashen')} checked={type ==='dashen'} >大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => this.handleChanged('type','laoban')} checked={type ==='laoban'} >老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => this.handleChanged('type','mengxin')} checked={type ==='mengxin'} >萌新</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace />
                        <Button onClick={this.goLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect()(Register)