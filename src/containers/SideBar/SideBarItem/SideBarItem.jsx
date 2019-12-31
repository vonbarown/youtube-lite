import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './SideBarItem.scss'

export const SideBarItem = (props) => {
    const highlight = props.highlight ? 'hightlight-item' : null;

    return (
        <Menu.Item className={['sidebar-item', highlight].join('')}>
            <div className='sidebar-item-alignment-container'>
                <span><Icon size='large' name={props.icon} /></span>
            </div>
        </Menu.Item>
    )
}