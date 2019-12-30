import React, { Component } from 'react'
import { Image, Menu } from 'semantic-ui-react'
import logo from '../../assets/images/logo.jpg'


class HeaderNav extends Component {
    render() {
        return (
            <Menu borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <img src={logo} size='tiny' />
                </Menu.Item>
                <Menu.Menu className='nav-container'>
                </Menu.Menu>

            </Menu>
        )
    }
}