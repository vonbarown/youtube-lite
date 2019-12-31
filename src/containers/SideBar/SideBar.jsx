import React, { Component } from 'react'
import { Menu, Divider } from 'semantic-ui-react'
import { SideBarItem } from './SideBarItem/SideBarItem'
import './SideBar.scss'


class SideBar extends Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav' >
                <SideBarItem highlight={true} label='Home' icon='home' />
                <SideBarItem label='Trending' icon='fire' />
                <SideBarItem label='Followers' icon='spy' />
                <Divider />
                <SideBarItem label='History' icon='history' />
                <SideBarItem label='Watch later' icon='clock' />
                <SideBarItem label='Liked videos' icon='thumbs up' />
                <Divider />
                <SideBarItem label='Movies and Shows' icon='film' />
                <Divider />
                <SideBarItem label='Report history' icon='flag' />
                <SideBarItem label='Help' icon='help circle' />
                <SideBarItem label='Send feedback' icon='comment' />
                <Divider />
            </Menu >
        )
    }
}

export default SideBar