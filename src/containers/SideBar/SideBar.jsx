import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { SideBarItem } from './SideBarItem/sidebarItem'
import './SideBar.css'


class SideBar extends Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav' >
            </Menu >
        )
    }
}

export default SideBar