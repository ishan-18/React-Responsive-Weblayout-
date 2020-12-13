import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'
import {BrowserRouter as Router} from 'react-router-dom'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <Router>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Burgers</SidebarLink>
                <SidebarLink to="/">Meals</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">About</SidebarLink>
                <SidebarLink to="/">Contact</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
        </Router>
    )  
}

export default Sidebar
