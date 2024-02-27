import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { NavLink } from 'react-router-dom';
import '../styles/menu.css'
const Menu = () => {
    return (
        <div className='menu-container'>
            <div className="logo"><LocalLibraryIcon /><p>LearnHub</p></div>
            <NavLink to="/" className="menu-item" activeClassName="active"><DashboardIcon /><p>Dashboard</p></NavLink>
            <NavLink to="/students" className="menu-item" activeClassName="active"><PeopleIcon /><p>Students</p></NavLink>
            <NavLink to="/courses" className="menu-item" activeClassName="active"><LibraryBooksIcon /><p>Courses</p></NavLink>
            <NavLink to="/schedule" className="menu-item" activeClassName="active"><CalendarMonthIcon /><p>Schedule</p></NavLink>
            <NavLink to="/transactions" className="menu-item" activeClassName="active"><AccountBalanceWalletIcon /><p>Transactions</p></NavLink>
            <NavLink to="/progress" className="menu-item" activeClassName="active"><TrendingUpIcon /><p>Progress</p></NavLink>
            <NavLink to="/settings" className="menu-item" activeClassName="active"><SettingsIcon /><p>Settings</p></NavLink>
            <NavLink to="/profile" className="menu-item" activeClassName="active"><AccountCircleIcon /><p>Profile</p></NavLink>
            <NavLink to="/logout" className="menu-item" activeClassName="active"><LogoutIcon /><p>Logout</p></NavLink>
            <div className='menu-img'></div>
        </div>
    )
}

export default Menu